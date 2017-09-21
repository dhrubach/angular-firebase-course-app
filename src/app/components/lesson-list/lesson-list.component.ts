import {
	Component,
	Input,
	OnChanges,
	OnDestroy,
	SimpleChange,
	SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NgProgressService } from 'ngx-progressbar';

import { ILesson } from '../../models';
import { LessonListService } from './lesson-list.service';

@Component({
	providers: [LessonListService],
	selector: 'course-lesson-list',
	styles: [require('./lesson-list.component.scss')],
	template: require('./lesson-list.template.html'),
})
class LessonListComponent implements OnChanges, OnDestroy {

	@Input() private course: string;

	private lessons$: Observable<ILesson[]>;
	private lessonsSubscription: Subscription;
	private lessons: ILesson[];

	constructor(
		private lessonListService: LessonListService,
		private progressService: NgProgressService) { } /* tslint:disable-line */

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const courseId = changes.course as SimpleChange;
			if (courseId.currentValue && courseId.currentValue !== courseId.previousValue) {
				this.fetchLessonList(courseId.currentValue);
			}
		}
	}

	public ngOnDestroy(): void {
		if (this.lessonsSubscription) {
			this.lessonsSubscription.unsubscribe();
		}
	}

	private fetchLessonList(courseId: string): void {
		this.lessons$ = this.lessonListService.fetchListOfLessonsPerCourse(courseId);

		this.progressService.start();

		this.lessonsSubscription = this.lessons$.subscribe((lessons: ILesson[]) => {
			this.lessons = lessons;
			this.progressService.done();
		});
	}
}

export { LessonListComponent };
