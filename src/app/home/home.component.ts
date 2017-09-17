import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { ICourseTopic } from '../components';

@Component({
	selector: 'course-home',
	styles: [require('./home.component.scss')],
	template: require('./home.template.html'),
})
export class HomeComponent implements OnInit {

	private topics: Observable<ICourseTopic[]>;
	private course: string;

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public ngOnInit(): void {
		this.topics =
			this.db.list('/topics')
				.map((topics: ICourseTopic[]) => {
					topics.forEach((topic: ICourseTopic) => {
						topic['iconUrl'] = require(`../../assets/img/${topic.name.toLowerCase()}.svg`);
					});
					return topics;
				});
	}

	private refreshLessonList($courseId: string) {
		this.course = $courseId;
	}
}
