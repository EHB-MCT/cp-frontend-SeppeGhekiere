import { useGetData } from "../../shared/hooks/UseGetData";
import "../../../styles/app.scss";
import { Link } from "react-router";

export const AllProjects = ({ selectedFilter }) => {
	const { data: projects, loading, error } = useGetData();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!Array.isArray(projects)) {
		return <div>No projects available.</div>;
	}

	const filteredProjects = selectedFilter ? projects.filter((item) => item.genre === selectedFilter) : projects;

	const sortedProjects = filteredProjects.sort((a, b) => {
		if (a.fairytale < b.fairytale) return -1;
		if (a.fairytale > b.fairytale) return 1;
		return 0;
	});

	return (
		<div className="fairytale">
			<h1>All Projects</h1>
			<div className="fairytale-container">
				{sortedProjects.map((item) => {
					const placeholderImage = "/src/assets/not_found_placeholder.png";
					const backgroundImage = item.imgThumbnail ? `url(${item.imgThumbnail})` : `url(${placeholderImage})`;
					return (
						<Link key={item.id} className="single-fairytale" to={`/making-of/${item.id}`}>
							<div className="coverImg" style={{ backgroundImage: backgroundImage }}></div>
							<div className="single-fairytale-info">
								<h1 className="name">{item.fairytale}</h1>
								<p className="author">Door {item.nameStudent}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
