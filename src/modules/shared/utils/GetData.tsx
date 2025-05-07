import React, { useEffect, useState } from "react";
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
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!data || data.length === 0) {
		return <h2>No data available</h2>;
	}

	return (
		<div className="fairytale">
			<h1>Populair</h1>
			<div className="fairytale-container">
				{data.map((item, index) => (
					<div key={index} className="single-fairytale">
						<img src="" className="coverImg" alt="" />
						<h1 className="name">{item.name}</h1>
						<p className="author">Door {item.author}</p>
					</div>
				))}
			</div>
		</div>
	);
};
