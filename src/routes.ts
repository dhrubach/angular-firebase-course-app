import { Route } from '@angular/router';

import { HomeComponent } from './app';

const routes: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

export { routes };
