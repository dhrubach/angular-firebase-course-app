import { NgModule } from '@angular/core';
import {
	MdButtonModule,
	MdCardModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdToolbarModule,
} from '@angular/material';

@NgModule({
	exports: [
		MdButtonModule,
		MdCardModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdToolbarModule,
	],
})
export class AppMaterialModule { }
