import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ILesson } from '../../models';
import { LessonListService } from './lesson-list.service';

@Component({
	providers: [LessonListService],
	selector: 'course-lesson-list',
	styles: [require('./lesson-list.component.scss')],
	template: require('./lesson-list.template.html'),
})
class LessonListComponent implements OnChanges {

	@Input() private course: string;

	private lessons: Observable<ILesson[]>;

	constructor(private lessonListService: LessonListService) { } /* tslint:disable-line */

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const courseId = changes.course as SimpleChange;
			if (courseId.currentValue && courseId.currentValue !== courseId.previousValue) {
				this.fetchLessonList(courseId.currentValue);
			}
		}
	}

	private fetchLessonList(courseId: string): void {
		this.lessons = this.lessonListService.fetchListOfLessonsPerCourse(courseId);
	}
}

export { LessonListComponent };
