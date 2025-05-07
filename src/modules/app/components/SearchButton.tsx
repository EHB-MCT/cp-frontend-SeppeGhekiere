import "../../../styles/searchButton.scss";

export const SearchButton = () => {
	return (
		<div className="searchButton">
			<input type="text" placeholder="🔍 Zoek hier een sprookje"></input>
			<button>Zoeken</button>
		</div>
	);
};
