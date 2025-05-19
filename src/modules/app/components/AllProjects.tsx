import { GetData } from "../../shared";
import "../../../styles/app.scss";
export const AllProjects = () => {
	const projects = GetData();
	console.log(projects);
	if (projects == "loading...") {
		return <div>Loading...</div>;
	}
	// projects.sort()
	let allProjects = projects;
	return (
		<div className="fairytale">
			<h1>All projects</h1>
			<div className="fairytale-container">
				{allProjects.map((item, index) => (
					<div key={index} className="single-fairytale">
						<img src={item.coverImg} className="coverImg" alt="" />
						<h1 className="name">{item.name}</h1>
						<p className="author">Door {item.author}</p>
					</div>
				))}
			</div>
		</div>
	);
};
