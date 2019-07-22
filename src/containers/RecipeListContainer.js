import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEntries } from "Actions";
import { RecipeList } from "Components";

class RecipeListContainer extends Component {
	componentDidMount() {
		this.props.fetchEntries();
	}
	render() {
		const { assets, recipeIds, recipesById } = this.props;
		return (
			<RecipeList
				assets={assets}
				recipeIds={recipeIds}
				recipesById={recipesById}
			/>
		);
	}
}

const mapStateToProps = state => {
	const { recipeIds, recipesById } = state.recipes;
	return {
		recipeIds,
		recipesById,
		assets: state.assets
	};
};

export const ConnectedRecipeList = connect(
	mapStateToProps,
	{ fetchEntries }
)(RecipeListContainer);
