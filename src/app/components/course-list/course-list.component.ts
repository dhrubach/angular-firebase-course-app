import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChange,
	SimpleChanges,
} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ICourseItem } from '../course-item/course-item.component';

interface ICourseTopic {
	name: string;
	iconUrl: string;
}

interface ICourse {
	description: string;
	longDescription: string;
	numberOfLessons: string;
	topicId: string;
	totalDuration: string;
	url: string;
	$key: string;
}

@Component({
	selector: 'course-list',
	styles: [require('./course-list.component.scss')],
	template: require('./course-list.template.html'),
})
class CourseListComponent implements OnChanges {

	@Input() private topic: ICourseTopic;
	@Output() private onSelect: EventEmitter<string>;

	private courseList: FirebaseListObservable<any[]>;

	constructor(private db: AngularFireDatabase) {
		this.onSelect = new EventEmitter<string>();
	}

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

	private onCourseSelect(course: ICourse) {
		this.onSelect.emit(course.$key);
	}
}

export { CourseListComponent, ICourseTopic };
