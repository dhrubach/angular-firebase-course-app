import { database, initializeApp } from 'firebase';

import * as chalk from 'chalk';
import * as moment from 'moment';

import { dbData } from './db-data';
import { firebaseConfig } from './firebase.config';

initializeApp(firebaseConfig);

const topicsRef = database().ref('topics');
const coursesRef = database().ref('courses');
const lessonsRef = database().ref('lessons');

console.log(`[${chalk.red.bold(moment().format('LTS'))}] start populating firebase database\n`);

dbData.topics.forEach((topic) => {

	let courseKeysPerTopic = [];

	console.log(`\n[${chalk.red.bold(moment().format('LTS'))}] adding topic - ${chalk.cyan(topic.name)}`);

	const topicRef = topicsRef.push({
		name: topic.name,
	});

	topic.courses.forEach((course) => {
		console.log(`[${chalk.red.bold(moment().format('LTS'))}] adding course - ${chalk.yellow(course.description)}`);
		const courseRef = coursesRef.push({
			url: course.url,
			description: course.description,
			longDescription: course.longDescription,
			numberOfLessons: course.numberOfLessons,
			totalDuration: course.totalDuration,
			topicId: topicRef.key,
		});

		courseKeysPerTopic.push(courseRef.key);

		let lessonKeysPerCourse = [];

		course.lessons.forEach((lesson: any) => {
			console.log(`[${chalk.red.bold(moment().format('LTS'))}] adding lesson - ${chalk.magenta(lesson.description)}`);
			lessonKeysPerCourse.push(lessonsRef.push({
				description: lesson.description,
				duration: lesson.duration,
				url: lesson.url,
				tags: lesson.tags,
				videoUrl: lesson.videoUrl || null,
				longDescription: lesson.longDescription,
				courseId: courseRef.key,
			}).key);
		});

		const courseAssociation = database().ref('lessonsPerCourse');
		const lessonsPerCourse = courseAssociation.child(courseRef.key);

		lessonKeysPerCourse.forEach(lessonKey => {
			const lessonCourseAssociation = lessonsPerCourse.child(lessonKey);
			lessonCourseAssociation.set(true);
		});
	});

	const topicAssociation = database().ref('coursesPerTopic');
	const coursesPerTopic = topicAssociation.child(topicRef.key);

	courseKeysPerTopic.forEach((courseKey) => {
		const courseAssociation = coursesPerTopic.child(courseKey);
		courseAssociation.set(true);
	});
});

console.log('\n');
console.log(`data insertion complete !!!`);
