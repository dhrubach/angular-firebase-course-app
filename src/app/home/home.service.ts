import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ITopic } from '../models';

import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public fetchListOfTopics(): Observable<ITopic[]> {
		return this.db.list('/topics')
			.map((topics: ITopic[]) => {
				topics.forEach((topic) => {
					topic['iconUrl'] = require(`../../assets/img/${topic.name.toLowerCase()}.svg`);
				});
				return topics;
			});
	}
}
