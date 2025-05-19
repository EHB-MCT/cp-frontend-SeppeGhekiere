import { useEffect } from "react";
import "../../../styles/searchButton.scss";
export const SearchFilter = () => {
	return (
		<div className="searchFilter">
			<div className="filterItem">
				<input type="radio" name="filter" id="adventure" />
				<label id="adventure">Adventure</label>
			</div>
			<div className="filterItem">
				<input type="radio" name="filter" id="horror" />
				<label id="horror">Horror</label>
			</div>
			<div className="filterItem">
				<input type="radio" name="filter" id="magic" />
				<label id="magic">Magic</label>
			</div>
		</div>
	);
};
