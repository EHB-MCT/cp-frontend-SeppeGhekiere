import { Outlet } from "react-router";

export const Projects = () => {
	return (
		<div>
			<Outlet />
			<h2>This is the page with all the projects</h2>
		</div>
	);
};
