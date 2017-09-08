import { Component, OnInit } from '@angular/core';

import { ICourseTopic } from '../components';

@Component({
	selector: 'course-home',
	styles: [require('./home.component.scss')],
	template: require('./home.template.html'),
})
export class HomeComponent implements OnInit {

	private topics: ICourseTopic[];

	constructor() { } /* tslint:disable-line */

	public ngOnInit(): void {
		this.topics = [
			{
				iconUrl: require('../../assets/img/angular.svg'),
				name: 'Angular',
			},
			{
				iconUrl: require('../../assets/img/rxjs.svg'),
				name: 'RxJs',
			},
			{
				iconUrl: require('../../assets/img/node.svg'),
				name: 'NodeJS',
			},
			{
				iconUrl: require('../../assets/img/js.svg'),
				name: 'JavaScript',
			},
		];
	}
}
