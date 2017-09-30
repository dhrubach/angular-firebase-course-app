import { Component, Input } from '@angular/core';

import { ILesson } from '../../models/lesson';

@Component({
	selector: 'course-lesson-form',
	styles: [require('./lesson-form.component.scss')],
	template: require('./lesson-form.component.html'),
})
export class LessonFormComponent {

	@Input() private initialValue: any;

	constructor() { } /* tslint:disable-line */
}
