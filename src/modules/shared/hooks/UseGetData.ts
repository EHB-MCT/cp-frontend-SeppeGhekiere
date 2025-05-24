import { useEffect, useState } from "react";
import { dataService } from "../service/data.service";
import { ApiData } from "../types/types"; 

export const useGetData = () => {
	const [data, setData] = useState<ApiData[]>([]); 
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true); 
			try {
				const result = await dataService.getData(); 
				setData(result);
			} catch (err) {
				setError("Error fetching data"); 
				console.error(err); 
			} finally {
				setLoading(false); 
			}
		};

		fetchData(); 
	}, []);

	return { data, loading, error };
};
