import { ApiData } from "../types/types";
import apiMock from "../mock/fairytale.json";
class DataService {
	// Specify the return type of the method
	// getData(): Promise<ApiData> {
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve(apiMock); // Ensure trashMock matches TrashData structure
	// 		}, 1000);
	// 	});
	// }
	getData() {
		console.log(apiMock);
		return apiMock;
	}
}

export const dataService = new DataService();
