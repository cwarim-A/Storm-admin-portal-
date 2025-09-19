export type UserShape = {
	firstName: string;
	lastName: string;
	otherNames: string;
	email: string;
	phone: string;
	gender: string;
	dob: string;
	occupation: string;
	occupationIndustry: string;
	estimatedMonthlySend: string;
	unitNo: string;
	streetNo: string;
};

export type FieldBoxType = {
	user: UserShape;
	editing: Record<string, boolean>;
	sectionForms: Record<string, Partial<UserShape>>;
	startSectionEdit: (s: string) => void;
	cancelSectionEdit: (s: string) => void;
	saveSection: (s: string) => void;
	updateSectionField: (section: string, field: keyof UserShape, value: string) => void;
};
