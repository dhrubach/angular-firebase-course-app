import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ICourse } from '../../models';

import 'rxjs/add/operator/do';

@Injectable()
export class CourseListService {

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public fetchListOfCourses(topicId: string): Observable<ICourse[]> {

		const courses$ = this.db.object(`/coursesPerTopic/${topicId}`)
							.do(console.log);

		courses$.subscribe();

		return this.db.list('/courses', {
			query: {
				equalTo: topicId,
				orderByChild: 'topicId',
			},
		});
	}
}
