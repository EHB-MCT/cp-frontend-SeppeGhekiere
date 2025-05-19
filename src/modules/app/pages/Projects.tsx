import { Outlet } from "react-router";
import { AllProjects, SearchButton, SearchFilter } from "../components";

export const Projects = () => {
	return (
		<div className="allProjects">
			<Outlet />
			<SearchButton />
			<SearchFilter />
			<AllProjects />
		</div>
	);
};
