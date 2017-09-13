import { Component, Input } from '@angular/core';

interface ICourseItem {
	numberOfLessons?: number;
	description: string;
}

@Component({
	selector: 'course-item',
	styles: [require('./course-item.component.scss')],
	template: require('./course-item.template.html'),
})
class CourseItemComponent {
	@Input() private data: ICourseItem;
}

export { CourseItemComponent, ICourseItem };
