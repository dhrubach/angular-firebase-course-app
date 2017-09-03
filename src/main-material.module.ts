import { NgModule } from '@angular/core';
import {
	MdButtonModule,
	MdCardModule,
} from '@angular/material';

@NgModule({
	exports: [
		MdButtonModule,
		MdCardModule,
	],
})
export class AppMaterialModule { }
