import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ITopic } from '../models';
import { HomeService } from './home.service';

@Component({
	providers: [HomeService],
	selector: 'course-home',
	styles: [require('./home.component.scss')],
	template: require('./home.template.html'),
})
export class HomeComponent implements OnInit {

	private topics: Observable<ITopic[]>;
	private course: string;

	constructor(private homeService: HomeService) { } /* tslint:disable-line */

	public ngOnInit(): void {
		this.topics = this.homeService.fetchListOfTopics();
	}

	private refreshLessonList($courseId: string) {
		this.course = $courseId;
	}
}
