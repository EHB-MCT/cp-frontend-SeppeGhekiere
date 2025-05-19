import { Link } from "react-router";
import "../../../styles/header.scss";

export const Navigation = () => {
	return (
		<div className="nav">
			<Link to="/" className="clicked">
				Home
			</Link>
			<Link to="/all-projects">All Projects</Link>
			<Link to="/making-of">Making Of</Link>

			<Link to="/fairy-tale">Sprookje</Link>
		</div>
	);
};
