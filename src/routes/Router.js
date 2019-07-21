import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recipes from "./Recipes";
import RecipeDetails from "./RecipeDetails";

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/:id" component={RecipeDetails} />
			<Route exact path="/" component={Recipes} />
		</Switch>
	</BrowserRouter>
);
