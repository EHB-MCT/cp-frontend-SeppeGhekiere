import { Outlet } from "react-router";

export const MakingOf = () => {
	return (
		<div>
			<Outlet />
			<div className="making-info">
				<img src="" alt="" />
			</div>
		</div>
	);
};
