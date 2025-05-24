import { MakingOfDetails } from "../components/MakingOfDetails";
import { Outlet } from "react-router";
import "../../../styles/app.scss";

export const MakingOf = () => {
	return (
		<div className="makingOf">
			<Outlet />
			<MakingOfDetails />
		</div>
	);
};
