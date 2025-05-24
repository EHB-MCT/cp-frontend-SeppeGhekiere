import { useGetData } from "../../shared/hooks/UseGetData";
import "../../../styles/app.scss";
export const HomeProjects = () => {
	const { data: projects, loading, error } = useGetData(); // Use the custom hook

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	// Ensure projects is an array before mapping
	if (!Array.isArray(projects)) {
		return <div>No projects available.</div>;
	}
	// Function to shuffle the array
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // Swap elements
		}
		return array;
	};
	// Shuffle projects and select the first 3
	const randomProjects = shuffleArray([...projects]).slice(0, 3);

	return (
		<div className="fairytale">
			<h1>All Projects</h1>
			<div className="fairytale-container">
				{randomProjects.map((item) => {
					const placeholderImage = "/src/assets/not_found_placeholder.png"; // Replace with your actual placeholder image path
					const backgroundImage = item.imgThumbnail ? `url(${item.imgThumbnail})` : `url(${placeholderImage})`;
					return (
						<a key={item.id} className="single-fairytale" href={item.fairytalelink}>
							<div
								className="coverImg"
								style={{ backgroundImage: backgroundImage }} // Set the background image
							></div>
							<div className="single-fairytale-info">
								<h1 className="name">{item.fairytale}</h1>
								<p className="author">Door {item.nameStudent}</p>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};
