import { Link } from "react-router";

export const Navigation = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/making-of">Making Of</Link>
			<Link to="/all-projects">All Projects</Link>
			<Link to="/fairy-tale">Sprookje</Link>
		</nav>
	);
};
