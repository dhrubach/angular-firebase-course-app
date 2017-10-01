import { Component, OnInit } from '@angular/core';

import { LessonListService } from '../components';
import { ILesson } from '../models/lesson';

@Component({
	selector: 'course-lesson-detail',
	styles: [require('./lesson-detail.component.scss')],
	template: require('./lesson-detail.template.html'),
})
export class LessonDetailComponent implements OnInit {

	private selectedLesson: ILesson;

	constructor(private lessonListService: LessonListService) { }

	public ngOnInit(): void {
		this.selectedLesson = this.lessonListService.selectedLesson;
	}
}
