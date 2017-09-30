import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ILesson, ILessonAssociation } from '../../models';

import 'rxjs/add/operator/concatMap';

@Injectable()
export class LessonListService {

	public selectedLesson: ILesson;

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public fetchListOfLessonsPerCourse(courseId: string): Observable<ILesson[]> {
		/**
		 * FirebaseListObservable emits an array of all lessons for
		 * a given course from 'lessonPerCourse' location
		 *
		 * lessonsPerCourse$ --> FirebaseListObservable<ILessonAssociation[]>
		 */
		const lessonsPerCourse$ = this.db.list(`/lessonsPerCourse/${courseId}`);

		/**
		 * lessonsObjectObservable$ --> Observable<Array<FirebaseObjectObservable<ILesson>>>
		 */
		const lessonsObjectObservable$ =
			lessonsPerCourse$.map<ILessonAssociation[], Array<FirebaseObjectObservable<any>>>(
				(lessons: ILessonAssociation[]) => {
					return lessons.map((lesson: ILessonAssociation) =>
						this.db.object(`/lessons/${lesson.$key}`));
				});

		return lessonsObjectObservable$.concatMap<Array<FirebaseObjectObservable<ILesson>>, ILesson[]>(
			(lessonsObject: Array<FirebaseObjectObservable<ILesson>>) =>
				Observable.combineLatest(lessonsObject));
	}
}
