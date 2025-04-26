import { createBrowserRouter } from "react-router";
import { Home } from "../app/components/Home/home";
import { MakingOf } from "../app/components/Making_of/makingOf";
import { Projects } from "../app/components/Projects/Project";
import { Navigation } from "../shared/components/navigation";
import { NotFound } from "../app/components/404/NotFound";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "",
				element: <Navigation />,
			},
		],
	},
	{
		path: "/making-of",
		element: <MakingOf />,
		children: [
			{
				path: "",
				element: <Navigation />,
			},
		],
	},
	{
		path: "all-projects",
		element: <Projects />,
		children: [
			{
				path: "",
				element: <Navigation />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
