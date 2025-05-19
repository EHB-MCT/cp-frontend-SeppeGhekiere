import { useEffect, useState } from "react";
import { dataService } from "../service/data.service";

export const GetData = () => {
	const [data, setData] = useState<{ author: string; name: string; coverImg: string; fairyTaleUrl: string }[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await dataService.getData(); // Assuming this returns a promise
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

	if (loading) {
		return "loading...";
	}
	return data;
};
