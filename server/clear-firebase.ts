import { database, initializeApp } from 'firebase';

import { firebaseConfig } from './firebase.config'

const databaseLocations = ['lessonsPerCourse', 'lessons', 'courses'];

initializeApp(firebaseConfig);

databaseLocations.forEach((location) => {
	const ref = database().ref(location);

	console.log('removing ${location}');
	console.log(ref);

	ref.remove()
		.then(() => {
			console.log(`data at '${location}' location removed.`);
		})
		.catch(() => {
			console.log('data deletion failed.');
		});
});
