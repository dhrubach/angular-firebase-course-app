import { Component, Input, OnInit } from '@angular/core';

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
class CourseListComponent implements OnInit {

	@Input() private topic: ICourseTopic;
	private courseList: ICourseItem[];

	constructor() { } /* tslint:disable-line */

	public ngOnInit(): void {
		this.courseList = [
			{
				lessons: 3,
				name: `Tutorial For Beginners`,
			},
			{
				lessons: 4,
				name: `Http and Services`,
			},
			{
				lessons: 10,
				name: `Templates`,
			},
		];
	}
}

export { CourseListComponent, ICourseTopic };
