import { SHOW_ENTRIES } from "../types";

export default (state = {}, action) => {
	switch (action.type) {
		case SHOW_ENTRIES:
			return action.entries.reduce((obj, el) => {
				if (el.sys.contentType.sys.id === "tag") {
					obj[el.sys.id] = el.fields.name;
				}
				return obj;
			}, {});

		default:
			return state;
	}
};
