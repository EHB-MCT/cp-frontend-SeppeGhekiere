import { createBrowserRouter } from "react-router";
import { Projects } from "../app/components/Projects/Project";
import { Navigation } from "../shared/components/navigation";
import { NotFound } from "../app/components/404/NotFound";
import { FairyTale } from "../app/components/Fairytale/Fairytale";
import { Home } from "../app/components/Home/home";
import { MakingOf } from "../app/components/Making_of/makingOf";
import { Header } from "../shared/components/header";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/making-of",
		element: <MakingOf />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "all-projects",
		element: <Projects />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "fairy-tale",
		element: <FairyTale />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
