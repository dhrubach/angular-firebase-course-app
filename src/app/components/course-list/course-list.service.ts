import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ICourse } from '../../models';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseListService {

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public fetchListOfCourses(topicId: string): Observable<ICourse[]> {
		const coursesPerTopic$ = this.db.list(`/coursesPerTopic/${topicId}`);

		const courses$ = coursesPerTopic$
			.map<any, FirebaseObjectObservable<ICourse>>(
				(courses) => courses.map((course) => this.db.object(`/courses/${course.$key}`)))
			.concatMap((objectObservableArray) => Observable.combineLatest<ICourse>(objectObservableArray));

		return courses$;
	}
}
