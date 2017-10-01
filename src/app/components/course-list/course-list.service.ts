import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ICourse, ICourseAssociation } from '../../models';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseListService {

	private static storageKey: string = 'course-name';

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public fetchListOfCourses(topicId: string): Observable<ICourse[]> {
		const coursesPerTopic$ = this.db.list(`/coursesPerTopic/${topicId}`);

		const coursesObjectObservable$ =
			coursesPerTopic$.map<ICourseAssociation[], Array<FirebaseObjectObservable<ICourse>>>(
				(
					courses: ICourseAssociation[]) => courses.map(
						(course: ICourseAssociation) => this.db.object(`/courses/${course.$key}`)));

		const courses$ = coursesObjectObservable$.concatMap<Array<FirebaseObjectObservable<ICourse>>, ICourse[]>(
			(objectObservableArray: Array<FirebaseObjectObservable<ICourse>>) =>
				Observable.combineLatest<ICourse>(objectObservableArray));

		return courses$;
	}

	public persistSelectedCourse(selectedCourseUrl: string): void {
		if (selectedCourseUrl) {
			window.sessionStorage[CourseListService.storageKey] = selectedCourseUrl;
		}
	}

	public fetchSelectedCourse(): string {
		const persistedCourse = window.sessionStorage[CourseListService.storageKey];
		return persistedCourse || null;
	}
}
