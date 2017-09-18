import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChange,
	SimpleChanges,
} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { ICourse, ITopic } from '../../models';
import { ICourseItem } from '../course-item/course-item.component';
import { CourseListService } from './course-list.service';

@Component({
	providers: [CourseListService],
	selector: 'course-list',
	styles: [require('./course-list.component.scss')],
	template: require('./course-list.template.html'),
})
class CourseListComponent implements OnChanges {

	@Input() private topic: ITopic;
	@Output() private onSelect: EventEmitter<string>;

	private courseList: Observable<ICourse[]>;

	constructor(private courseListService: CourseListService) {
		this.onSelect = new EventEmitter<string>();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const topic = changes.topic as SimpleChange;
			this.fetchCourseList(topic.currentValue && topic.currentValue.$key);
		}
	}

	private fetchCourseList(topicId: string): void {
		this.courseList = this.courseListService.fetchListOfCourses(topicId);
	}

	private onCourseSelect(course: ICourse) {
		this.onSelect.emit(course.$key);
	}
}

export { CourseListComponent };
