import { useGetData } from "../../shared/hooks/UseGetData"; // Adjust the import path as necessary
import "../../../styles/app.scss";

export const AllProjects = () => {
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

	return (
		<div className="fairytale">
			<h1>All Projects</h1>
			<div className="fairytale-container">
				{projects.map((item) => (
					<a key={item.id} className="single-fairytale" href={item.fairytalelink}>
						<img
							src={item.imgThumbnail || "path/to/placeholder-image.png"} // Fallback image
							className="coverImg"
							alt={item.fairytale}
						/>
						<h1 className="name">{item.fairytale}</h1>
						<p className="author">Door {item.nameStudent}</p> {/* Assuming nameStudent is the author */}
					</a>
				))}
			</div>
		</div>
	);
};
