import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./modules/app/components/Root/Root";

import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Root />
	</StrictMode>
);
