import { useState } from "react"; // Import useState
import { Outlet } from "react-router";
import { AllProjects, SearchButton, SearchFilter } from "../components";

export const Projects = () => {
	const [selectedFilter, setSelectedFilter] = useState(""); // State to hold the selected filter

	return (
		<div className="allProjects">
			<Outlet />
			<SearchButton />
			<SearchFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
			<AllProjects selectedFilter={selectedFilter} /> {/* Pass selectedFilter to AllProjects */}
		</div>
	);
};
