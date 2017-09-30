import { Component, OnInit } from '@angular/core';

import { ILesson } from '../../models/lesson';
import { LessonListService } from '../lesson-list/lesson-list.service';

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
