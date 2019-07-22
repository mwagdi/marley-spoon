import axios from "axios";
import { LOAD_ASSETS } from "../types";
import { API_URL } from "../../constants";

const loadAssets = assets => {
	return {
		type: LOAD_ASSETS,
		assets
	};
};

export const fetchAssets = () => {
	return dispatch => {
		axios
			.get(`${API_URL}environments/master/assets`)
			.then(response => dispatch(loadAssets(response.data.items)))
			.catch(err => console.log(err));
	};
};
