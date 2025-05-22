// hooks/useGetData.ts
import { useEffect, useState } from "react";
import { dataService } from "../service/data.service";
import { ApiData } from "../types/types"; // Import the ApiData type

export const useGetData = () => {
	const [data, setData] = useState<ApiData[]>([]); // Use the ApiData type
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await dataService.getData(); // Assuming this returns ApiData[]
				setData(result);
			} catch (err) {
				setError("Error fetching data");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []); // Empty dependency array means this runs once when the component mounts

	return { data, loading, error }; // Return the data, loading state, and error
};
