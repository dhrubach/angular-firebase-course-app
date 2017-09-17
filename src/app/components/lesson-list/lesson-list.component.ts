import { Component, Input } from '@angular/core';

interface ICourseLesson {
	description: string;
	duration: string;
	tags: string[];
}

@Component({
	selector: 'course-lesson-list',
	styles: [require('./lesson-list.component.scss')],
	template: require('./lesson-list.template.html'),
})
class LessonListComponent {
	@Input() private lessons: ICourseLesson[];
}

export { ICourseLesson, LessonListComponent };
