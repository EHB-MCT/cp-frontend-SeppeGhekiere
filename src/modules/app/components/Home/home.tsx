import { Outlet } from "react-router";

export const Home = () => {
	return (
		<div>
			<Outlet />
			<h1>This is the homepage</h1>
		</div>
	);
};
