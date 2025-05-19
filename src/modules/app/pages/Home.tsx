import { Outlet } from "react-router";
import { GetData } from "../../shared/utils/GetData";
import { SearchButton } from "../components/SearchButton";
import { HomeProjects } from "../components";

export const Home = () => {
	return (
		<div className="home">
			<Outlet />
			<div className="title">
				<h1>De sprookjes catalogus</h1>
				<p>Stap binnen in een betoverende wereld vol interactieve sprookjes. Ontdek unieke one-page scrolling websites, creatieve animaties en verrassende effecten. Laat je meeslepen door magie-en webdesign!</p>
				<SearchButton />
			</div>

			<HomeProjects />
			<a href="all-projects" className="home-btn-all-projects">Go to all projects</a>
		</div>
	);
};
