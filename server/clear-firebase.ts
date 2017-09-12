import { database, initializeApp } from 'firebase';

import * as chalk from 'chalk';
import * as moment from 'moment';

import { firebaseConfig } from './firebase.config'

const databaseLocations = ['lessonsPerCourse', "coursesPerTopic", 'lessons', 'courses', "topics"];
const log = console.log.bind(console);

initializeApp(firebaseConfig);

databaseLocations.forEach((location) => {
	const ref = database().ref(location);

	log(`[${chalk.red.bold(moment().format('LTS'))}] removing ${chalk.cyan(location)}`);

	ref.remove()
		.then(() => {
			log(`[${chalk.red.bold(moment().format('LTS'))}]  data at ${chalk.yellow.bold(location)} removed.`);
		})
		.catch(() => {
			log('data deletion failed.');
		});
});
