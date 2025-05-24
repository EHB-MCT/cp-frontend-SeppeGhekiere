import "../../../styles/searchButton.scss";

export const SearchFilter = ({ selectedFilter, setSelectedFilter }) => {
	const handleFilterChange = (event) => {
		setSelectedFilter(event.target.id); 
	};

	return (
		<div className="searchFilter">
			<div className="filterItem">
				<input
					type="radio"
					name="filter"
					id="avontuur"
					checked={selectedFilter === "avontuur"}
					onChange={handleFilterChange} 
				/>
				<label
					htmlFor="avontuur"
					className={selectedFilter === "avontuur" ? "selected" : ""} 
				>
					Adventure
				</label>
			</div>
			<div className="filterItem">
				<input
					type="radio"
					name="filter"
					id="horror"
					checked={selectedFilter === "horror"} 
					onChange={handleFilterChange} 
				/>
				<label
					htmlFor="horror"
					className={selectedFilter === "horror" ? "selected" : ""} 
				>
					Horror
				</label>
			</div>
			<div className="filterItem">
				<input
					type="radio"
					name="filter"
					id="fantasie"
					checked={selectedFilter === "fantasie"}
					onChange={handleFilterChange}
				/>
				<label
					htmlFor="fantasie"
					className={selectedFilter === "fantasie" ? "selected" : ""} 
				>
					Fantasy
				</label>
			</div>
		</div>
	);
};
