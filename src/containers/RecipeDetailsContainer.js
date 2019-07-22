import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { API_URL } from './../constants';
import RecipeDetails from 'Routes/RecipeDetails';
import { fetchEntries } from 'Actions';
import { isEmpty } from './../helpers';

const RecipeDetailsContainer = ({ match, assets, recipe, fetchEntries }) => {
    // const [recipe, setRecipe] = useState({})
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        if(isEmpty(recipe)){
            fetchEntries()
        }
        // axios.defaults.headers["Authorization"] = `Bearer ${process.env.ACCESS_TOKEN}`
        // if(isEmpty(assets)){
        //     fetchAssets()
        // }
        // const fetchRecipe = async () => {
        //     const recipeResponse = await axios.get(`${API_URL}entries/${match.params.id}`)
        //     setMounted(true)
        //     const chefResponse = await axios.get(`${API_URL}entries/${recipeResponse.data.fields.chef.sys.id}`);
        //     setRecipe({
        //         ...recipeResponse.data.fields,
        //         chef: chefResponse.data.fields.name,
        //         photo: assets[recipeResponse.data.fields.photo.sys.id]
        //     })
        // }
        // if(!mounted){
        //     fetchRecipe();
        // }
    })
    return <RecipeDetails image={recipe.photo ? assets[recipe.photo.sys.id] : null} recipe={recipe} />
}

const mapStateToProps = (state, props) => {
    const { recipesById } = state.recipes
    return {
        assets: state.assets,
        recipe: recipesById[props.match.params.id] || {}
    }
}

export const ConnectedRecipeDetails = connect(mapStateToProps, { fetchEntries })(RecipeDetailsContainer)