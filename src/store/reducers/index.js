import { combineReducers } from "redux";
import recipes from "./recipes";
import chefs from "./chefs";
import tags from "./tags";
import assets from "./assets";

export default combineReducers({
	recipes,
	assets,
	chefs,
	tags
});
