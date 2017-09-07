import { Component } from '@angular/core';

import { ICourseItem } from '../course-item/course-item.component';

@Component({
	selector: 'course-list',
	styles: [require('./course-list.component.scss')],
	template: require('./course-list.template.html'),
})
export class CourseListComponent {

	private courseList: ICourseItem[];

	constructor() {

		this.courseList = [
			{
				iconUrl: require('../../../assets/img/angular.svg'),
				name: `Tutorial For Beginners`,
			},
			{
				iconUrl: require('../../../assets/img/angular.svg'),
				name: `Http and Services`,
			},
			{
				iconUrl: require('../../../assets/img/angular.svg'),
				name: `Templates`,
			},
		];
	}
}
