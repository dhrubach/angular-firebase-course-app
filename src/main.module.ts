import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NgProgressModule, NgProgressService } from 'ngx-progressbar';

import { firebaseConfig } from '../config/firebase.config';

import {
	AppComponent,
	CourseItemComponent,
	CourseListComponent,
	HomeComponent,
	LessonDetailComponent,
	LessonFormComponent,
	LessonListComponent,
	LessonListService,
} from './app';
import { AppMaterialModule } from './main-material.module';
import { AppRoutingModule } from './main-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		CourseItemComponent,
		CourseListComponent,
		HomeComponent,
		LessonDetailComponent,
		LessonFormComponent,
		LessonListComponent,
	],
	entryComponents: [AppComponent],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AppMaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		NgProgressModule,
	],
	providers: [LessonListService, NgProgressService],
})
export class MainComponent {
	constructor(private appRef: ApplicationRef) { }

	private ngDoBootstrap() {
		this.appRef.bootstrap(AppComponent);
	}
}
