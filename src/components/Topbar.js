import React from "react";
import { Link } from "react-router-dom";

export const Topbar = () => (
	<header className="header">
		<Link className="header__link" to="/">
			Recipes
		</Link>
	</header>
);
