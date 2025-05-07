import { Outlet } from "react-router";

export const MakingOf = () => {
	return (
		<div>
			<Outlet />
			<h2>This is the making of page</h2>
		</div>
	);
};
