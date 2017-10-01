import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
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
class CourseListComponent implements OnChanges, OnDestroy, OnInit {

	@Input() private topic: ITopic;
	@Input() private selectedCourse: string;
	@Output() private onSelect: EventEmitter<{ key: string, url: string }>;

	private courseList$: Observable<ICourse[]>;
	private courseListSubscription: Subscription;
	private courseList: ICourse[];
	private selectedCourseUrl: string;

	constructor(private courseListService: CourseListService, private progressService: NgProgressService) {
		this.onSelect = new EventEmitter<{ key: string, url: string }>();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			const topic = changes.topic as SimpleChange;
			if (topic) {
				this.fetchCourseList(topic.currentValue && topic.currentValue.$key);
			}

			const selectedCourse = changes.selectedCourse as SimpleChange;
			if (selectedCourse) {
				this.selectedCourseUrl = selectedCourse.currentValue;
			}
		}
	}

	public ngOnInit(): void {
		this.selectedCourseUrl = this.courseListService.fetchSelectedCourse();
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
			const selectedCourse = this.courseList.filter((course) => course.url === this.selectedCourseUrl);
			if (selectedCourse && selectedCourse.length === 1) {
				this.onCourseSelect(selectedCourse[0]);
			}
			this.progressService.done();
		});
	}

	private onCourseSelect(course: ICourse) {
		this.courseListService.persistSelectedCourse(course.url);
		this.onSelect.emit({ key: course.$key, url: course.url });
	}
}

export { CourseListComponent };
