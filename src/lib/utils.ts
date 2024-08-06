const BASE_URL = '/data/data.json';
export async function getData() {
	try {
		const response = await fetch(BASE_URL);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
