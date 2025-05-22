import { ApiData } from "../types/types";

class DataService {
	getData(): Promise<ApiData[]> {
		return new Promise((resolve, reject) => {
			fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => {
					resolve(data); // Ensure data matches FairytaleData structure
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
}

export const dataService = new DataService();
