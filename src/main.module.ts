import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
