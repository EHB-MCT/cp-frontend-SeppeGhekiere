import "../../../styles/searchButton.scss";

export const SearchFilter = ({ selectedFilter, setSelectedFilter }) => {
	const handleFilterChange = (event) => {
		setSelectedFilter(event.target.id); // Set the selected filter based on the radio button id
	};

	return (
		<div className="searchFilter">
			<div className="filterItem">
				<input
					type="radio"
					name="filter"
					id="avontuur"
					checked={selectedFilter === "avontuur"} // Check if this filter is selected
					onChange={handleFilterChange} // Handle change
				/>
				<label
					htmlFor="avontuur"
					className={selectedFilter === "avontuur" ? "selected" : ""} // Add 'selected' class if this filter is selected
				>
					Adventure
				</label>
			</div>
			<div className="filterItem">
				<input
					type="radio"
					name="filter"
					id="horror"
					checked={selectedFilter === "horror"} // Check if this filter is selected
					onChange={handleFilterChange} // Handle change
				/>
				<label
					htmlFor="horror"
					className={selectedFilter === "horror" ? "selected" : ""} // Add 'selected' class if this filter is selected
				>
					Horror
				</label>
			</div>
			<div className="filterItem">
				<input
					type="radio"
					name="filter"
					id="fantasie"
					checked={selectedFilter === "fantasie"} // Check if this filter is selected
					onChange={handleFilterChange} // Handle change
				/>
				<label
					htmlFor="fantasie"
					className={selectedFilter === "fantasie" ? "selected" : ""} // Add 'selected' class if this filter is selected
				>
					Fantasy
				</label>
			</div>
		</div>
	);
};
