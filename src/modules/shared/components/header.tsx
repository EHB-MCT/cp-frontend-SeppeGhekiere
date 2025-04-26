import "../../../styles/header.scss";
import { Navigation } from "./navigation";

export const Header = () => {
	return (
		<header>
			<img src="public\logo_er_was_eens.svg" alt="" />
			<Navigation />
		</header>
	);
};
