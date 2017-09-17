import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

interface ICourseLesson {
	description: string;
	duration: string;
	tags: string[];
}

interface ILesson {
	courseId: string;
	description: string;
	duration: string;
	longDescription?: string;
	tags: string;
	url: string;
	$key: string;
}

@Component({
	selector: 'course-lesson-list',
	styles: [require('./lesson-list.component.scss')],
	template: require('./lesson-list.template.html'),
})
class LessonListComponent implements OnChanges {

	@Input() private course: string;

	private lessons: FirebaseListObservable<any>;

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const courseId = changes.course as SimpleChange;
			if (courseId.currentValue && courseId.currentValue !== courseId.previousValue) {
				this.fetchLessonList(courseId.currentValue);
			}
		}
	}

	private fetchLessonList(courseId: string): void {
		this.lessons = this.db.list('/lessons', {
			query: {
				equalTo: courseId,
				orderByChild: 'courseId',
			},
		});
	}
}

export { ICourseLesson, LessonListComponent };
