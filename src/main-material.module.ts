import { NgModule } from '@angular/core';
import {
	MdButtonModule,
	MdCardModule,
	MdListModule,
	MdToolbarModule,
} from '@angular/material';

@NgModule({
	exports: [
		MdButtonModule,
		MdCardModule,
		MdListModule,
		MdToolbarModule,
	],
})
export class AppMaterialModule { }
