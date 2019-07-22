import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "./../constants";
import RecipeDetails from "Routes/RecipeDetails";
import { fetchEntries } from "Actions";
import { isEmpty } from "./../helpers";

const RecipeDetailsContainer = ({ match, assets, tags,chefs, recipe, fetchEntries }) => {
	const [recipeTags, setTags] = useState([])
	const [chef, setChef] = useState("")
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
        if(!mounted){
            if (isEmpty(recipe)) {
                fetchEntries();
            }
            else{
                setChef(chefs[recipe.chef.sys.id])
                if(recipe.tags){
                    setTags(recipe.tags.map(tag => tags[tag.sys.id]))
                    setMounted(true)
                }
            }
        }
	});
	return (
		<RecipeDetails
			image={recipe.photo ? assets[recipe.photo.sys.id] : null}
            recipe={recipe}
            tags={recipeTags}
            chef={chef}
		/>
	);
};

const mapStateToProps = (state, props) => {
	const { recipesById } = state.recipes;
	return {
		assets: state.assets,
		chefs: state.chefs,
        recipe: recipesById[props.match.params.id] || {},
        tags: state.tags
	};
};

export const ConnectedRecipeDetails = connect(
	mapStateToProps,
	{ fetchEntries }
)(RecipeDetailsContainer);
