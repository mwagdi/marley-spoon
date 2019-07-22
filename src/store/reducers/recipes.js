import { combineReducers } from 'redux'
import { SHOW_ENTRIES } from "../types";

const recipeIds = (state = [], action) => {
	switch (action.type) {
		case SHOW_ENTRIES:
			return action.entries.reduce((arr,el) => {
				if(el.sys.contentType.sys.id === "recipe"){
					arr.push(el.sys.id)
				}
				return arr
			}, []);

		default:
			return state;
	}
};

const recipesById = (state = {}, action) => {
	switch (action.type) {
		case SHOW_ENTRIES:
			return action.entries.reduce((obj,el) => {
                if(el.sys.contentType.sys.id === "recipe"){
                    obj[el.sys.id] = el.fields
                }
                return obj;
            }, {});

		default:
			return state;
	}
};

export default combineReducers({
	recipeIds,
	recipesById
})