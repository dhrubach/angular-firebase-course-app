import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from '../config/firebase.config';

import {
	AppComponent,
	CourseItemComponent,
	CourseListComponent,
	HomeComponent,
} from './app';
import { AppMaterialModule } from './main-material.module';
import { AppRoutingModule } from './main-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		CourseItemComponent,
		CourseListComponent,
		HomeComponent,
	],
	entryComponents: [AppComponent],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AppMaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
	],
})
export class MainComponent {
	constructor(private appRef: ApplicationRef) { }

	private ngDoBootstrap() {
		this.appRef.bootstrap(AppComponent);
	}
}
