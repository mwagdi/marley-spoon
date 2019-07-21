import axios from 'axios'
import { SHOW_RECIPES } from '../types';
import { API_URL } from '../../constants';
import { fetchAssets } from './assets';

const showRecipes = recipes => {
    return {
        type: SHOW_RECIPES,
        recipes
    }
}

export const fetchRecipes = () => {
    return dispatch => {
        axios.defaults.headers["Authorization"] = `Bearer ${process.env.ACCESS_TOKEN}`
        axios.get(`${API_URL}entries`)
        .then(response => {
            dispatch(showRecipes(response.data.items))
            dispatch(fetchAssets())
        })
        .catch(err => console.log(err))
    }
}