import { NgModule } from '@angular/core';
import {
	MdButtonModule,
	MdCardModule,
	MdIconModule,
	MdListModule,
	MdToolbarModule,
} from '@angular/material';

@NgModule({
	exports: [
		MdButtonModule,
		MdCardModule,
		MdIconModule,
		MdListModule,
		MdToolbarModule,
	],
})
export class AppMaterialModule { }
