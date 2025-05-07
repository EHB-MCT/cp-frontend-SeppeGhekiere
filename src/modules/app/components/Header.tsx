import "../../../styles/header.scss";
import { Navigation } from "./Navigation";

export const Header = () => {
	return (
		<div className="header">
			<img src="/logo_er_was_eens.svg" alt="" />
			<Navigation />
		</div>
	);
};
