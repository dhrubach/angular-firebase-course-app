import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	templateUrl: require('./lesson-form.component.html'),
	selector: 'course-lesson-form',
	styleUrls: [require('./lesson-form.component.scss')],
})
export class LessonFormComponent implements OnChanges {

	private form: FormGroup;

	@Input() private initialValue: any;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			description: ['', Validators.required],
			url: ['', Validators.required],
			tags: ['', Validators.required],
			longDescription: ['']
		});
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['initialValue']) {
			this.form.patchValue(changes['initialValue'].currentValue);
		}
	}

	private isErrorVisible(field: string, error: string): boolean {
		return this.form.controls[field].dirty
			&& this.form.controls[field].errors &&
			this.form.controls[field].errors[error];
	}

	private reset(): void {
		this.form.reset();
	}

	private get valid() {
		return this.form.valid;
	}

	private get value() {
		return this.form.value;
	}
}
