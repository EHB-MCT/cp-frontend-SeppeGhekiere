import { useGetData } from "../../shared/hooks/UseGetData"; // Adjust the import path as necessary
import "../../../styles/app.scss";

export const AllProjects = ({ selectedFilter }) => { // Accept selectedFilter as a prop
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

	// Filter projects based on the selected filter
	const filteredProjects = selectedFilter
		? projects.filter((item) => item.genre === selectedFilter) // Assuming each project has a 'genre' property
		: projects;

	return (
		<div className="fairytale">
			<h1>All Projects</h1>
			<div className="fairytale-container">
				{filteredProjects.map((item) => {
					const placeholderImage = "/src/assets/not_found_placeholder.png"; // Replace with your actual placeholder image path
					const backgroundImage = item.imgThumbnail ? `url(${item.imgThumbnail})` : `url(${placeholderImage})`;
					return (
						<a key={item.id} className="single-fairytale" href={"/making-of/" + item.id}>
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
