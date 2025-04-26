import { Link } from "react-router";

export const Navigation = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/making-of">Making Of</Link>
			<Link to="/all-projects">All Projects</Link>
		</div>
	);
};
