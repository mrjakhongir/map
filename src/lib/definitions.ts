export interface Place {
	id: number;
	type: string;
	location: string;
	title: string;
	description: string;
	address: string;
	img: string;
	phone: string;
	coordinates: {
		latitude: number;
		longitude: number;
	};
}
