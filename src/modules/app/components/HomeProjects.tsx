import { useGetData } from "../../shared/hooks/UseGetData"; 
import "../../../styles/app.scss";
export const HomeProjects = () => {
	const projects = useGetData();
	console.log(projects);
	if (projects == "loading...") {
		return <div>Loading...</div>;
	}

	let randomProjects;

	randomProjects = projects.slice(0, 3);

	console.log(randomProjects);
	return (
		<div className="fairytale">
			<h1>Populair</h1>
			<div className="fairytale-container">
				{randomProjects.map((item, index) => (
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
