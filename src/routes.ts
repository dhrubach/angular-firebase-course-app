import { Route } from '@angular/router';

import { HomeComponent, LessonDetailComponent } from './app';

const routes: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: 'lesson-detail/:id', component: LessonDetailComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

export { routes };
