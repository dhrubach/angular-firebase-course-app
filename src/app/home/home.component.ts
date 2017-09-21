import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NgProgressService, ɵa as ProgressComponent } from 'ngx-progressbar';

import { ITopic } from '../models';
import { HomeService } from './home.service';

@Component({
	providers: [HomeService],
	selector: 'course-home',
	styles: [require('./home.component.scss')],
	template: require('./home.template.html'),
})
export class HomeComponent implements OnInit, OnDestroy {

	private topics$: Observable<ITopic[]>;
	private topicsSubscription: Subscription;
	private topics: ITopic[];
	private course: string;

	@ViewChild(ProgressComponent)
	private progressComponent: ProgressComponent;

	constructor(
		private homeService: HomeService,
		private progressService: NgProgressService) { } /* tslint:disable-line */

	public ngOnInit(): void {
		this.topics$ = this.homeService.fetchListOfTopics();

		this.progressComponent.color = '#efef15';
		this.progressService.start();

		this.topicsSubscription = this.topics$.subscribe(
			(topics: ITopic[]) => {
				this.topics = topics;
			},
		);
	}

	public ngOnDestroy(): void {
		if (this.topicsSubscription) {
			this.topicsSubscription.unsubscribe();
		}
	}

	private refreshLessonList($courseId: string) {
		this.course = $courseId;
	}
}
