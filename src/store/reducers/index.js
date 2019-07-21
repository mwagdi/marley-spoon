import { combineReducers } from "redux";
import recipes from './recipes'
import assets from './assets'

export default combineReducers({
    recipes,
    assets
});
