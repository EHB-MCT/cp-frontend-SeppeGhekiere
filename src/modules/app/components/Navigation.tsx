import { Link, useLocation } from "react-router";
import "../../../styles/header.scss";

export const Navigation = () => {
	const location = useLocation();

	return (
		<div className="nav">
			<Link to="/" className={location.pathname === "/" ? "clicked" : ""}>
				Home
			</Link>
			<Link to="/all-projects" className={location.pathname === "/all-projects" ? "clicked" : ""}>
				All Projects
			</Link>
			<Link to="/making-of" className={location.pathname === "/making-of" ? "clicked" : ""}>
				Making Of
			</Link>

			<Link to="/fairy-tale" className={location.pathname === "/fairy-tale" ? "clicked" : ""}>
				Sprookje
			</Link>
		</div>
	);
};
