import { useParams } from "react-router";
import { useGetData } from "../../shared/hooks/UseGetData";
import "../../../styles/main.scss";
export const MakingOfDetails = () => {
	const { id } = useParams();
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

	const project = projects.find((item) => item.id === id);

	if (!project) {
		return <div>Project not found.</div>;
	}

	return (
		<div className="making-of-details">
			<div className="making-info">
				<div className="making-info-image" style={{ backgroundImage: `url(${project.imgThumbnail})` }}></div>
				<div className="making-info-text">
					<h1>{project.fairytale}</h1>
					<p>{project.description}</p>
					<p>Door {project.nameStudent}</p>

					<a href={project.fairytaleLink} target="_blank" className="making-info-link">
						Go to the Fairytale
					</a>
				</div>
			</div>
			<div className="making-extra-images">{project.imgsExtra.map((item, index) => (item ? <div key={index} className="extra-image" style={{ backgroundImage: `url(${item})` }}></div> : null))}</div>
		</div>
	);
};
