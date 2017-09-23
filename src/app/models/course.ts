interface ICourse {
	description: string;
	longDescription: string;
	numberOfLessons: string;
	topicId: string;
	totalDuration: string;
	url: string;
	$key: string;
}

interface ICourseAssociation {
	$key: string;
	$value: boolean;
}

export { ICourse, ICourseAssociation };
