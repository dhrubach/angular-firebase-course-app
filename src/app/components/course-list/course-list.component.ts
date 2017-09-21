import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	Output,
	SimpleChange,
	SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NgProgressService } from 'ngx-progressbar';

import { ICourse, ITopic } from '../../models';
import { ICourseItem } from '../course-item/course-item.component';
import { CourseListService } from './course-list.service';

@Component({
	providers: [CourseListService],
	selector: 'course-list',
	styles: [require('./course-list.component.scss')],
	template: require('./course-list.template.html'),
})
class CourseListComponent implements OnChanges, OnDestroy {

	@Input() private topic: ITopic;
	@Output() private onSelect: EventEmitter<string>;

	private courseList$: Observable<ICourse[]>;
	private courseListSubscription: Subscription;
	private courseList: ICourse[];

	constructor(private courseListService: CourseListService, private progressService: NgProgressService) {
		this.onSelect = new EventEmitter<string>();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const topic = changes.topic as SimpleChange;
			this.fetchCourseList(topic.currentValue && topic.currentValue.$key);
		}
	}

	public ngOnDestroy(): void {
		if (this.courseListSubscription) {
			this.courseListSubscription.unsubscribe();
		}
	}

	private fetchCourseList(topicId: string): void {
		this.courseList$ = this.courseListService.fetchListOfCourses(topicId);

		this.courseListSubscription = this.courseList$.subscribe((courseList: ICourse[]) => {
			this.courseList = courseList;
			this.progressService.done();
		});
	}

	private onCourseSelect(course: ICourse) {
		this.onSelect.emit(course.$key);
	}
}

export { CourseListComponent };
