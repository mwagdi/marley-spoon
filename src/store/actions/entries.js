import axios from "axios";
import { SHOW_ENTRIES } from "../types";
import { API_URL } from "../../constants";
import { fetchAssets } from "./assets";

const showEntries = entries => {
	return {
		type: SHOW_ENTRIES,
		entries
	};
};

export const fetchEntries = () => {
	return dispatch => {
		axios.defaults.headers[
			"Authorization"
		] = `Bearer ${process.env.ACCESS_TOKEN}`;
		axios
			.get(`${API_URL}entries`)
			.then(response => {
				dispatch(showEntries(response.data.items));
				dispatch(fetchAssets());
			})
			.catch(err => console.log(err));
	};
};
