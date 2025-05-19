import { createBrowserRouter } from "react-router";
import { Projects } from "../app/pages/Projects";
import { Navigation } from "../app/components/Navigation";
import { NotFound } from "../app/pages/NotFound";
import { FairyTale } from "../app/pages/FairyTale";
import { Home } from "../app/pages/Home";
import { MakingOf } from "../app/pages/MakingOf";
import { Header } from "../app/components";
import { Footer } from "../app/components";

export const router = createBrowserRouter([
	{
		path: "",
		element: <Home />,
		children: [
			{
				path: "",
				element: <Header />,
			},
			{
				path: "",
				element: <Footer />,
			},
		],
	},
	{
		path: "making-of",
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
		path: "fairytale",
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
