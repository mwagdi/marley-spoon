import { LOAD_ASSETS } from "../types";

export default (state = {}, action) => {
	switch (action.type) {
		case LOAD_ASSETS:
			return action.assets.reduce((obj, el) => {
				return {
					...obj,
					[el.sys.id]: el.fields.file
				};
			}, {});

		default:
			return state;
	}
};
