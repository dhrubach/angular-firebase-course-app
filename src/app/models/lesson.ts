interface ILesson {
	courseId: string;
	description: string;
	duration: string;
	longDescription?: string;
	tags: string;
	url: string;
	$key: string;
}

interface ILessonAssociation {
	$key: string;
	$value: boolean;
}

export { ILesson, ILessonAssociation };
