import {
	Component,
	Input,
	OnChanges,
	SimpleChange,
	SimpleChanges,
} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ICourseItem } from '../course-item/course-item.component';

interface ICourseTopic {
	name: string;
	iconUrl: string;
}

@Component({
	selector: 'course-list',
	styles: [require('./course-list.component.scss')],
	template: require('./course-list.template.html'),
})
class CourseListComponent implements OnChanges {

	@Input() private topic: ICourseTopic;
	private courseList: FirebaseListObservable<any[]>;

	constructor(private db: AngularFireDatabase) { } /* tslint:disable-line */

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const topic = changes.topic as SimpleChange;
			this.fetchCourseList(topic.currentValue && topic.currentValue.$key);
		}
	}

	private fetchCourseList(topicId: string): void {
		this.courseList = this.db.list('/courses', {
			query: {
				equalTo: topicId,
				orderByChild: 'topicId',
			},
		});
	}
}

export { CourseListComponent, ICourseTopic };
