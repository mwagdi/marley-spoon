import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, fetchAssets } from 'Actions'
import { RecipeList } from 'Components'

class RecipeListContainer extends Component{
    componentDidMount(){
        this.props.fetchRecipes()
        // this.props.fetchAssets()
    }
    render(){
        const { assets, recipes } = this.props;
        return <RecipeList assets={assets} recipes={recipes} />
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        assets: state.assets
    }
}

export const ConnectedRecipeList = connect(mapStateToProps, { fetchRecipes, fetchAssets })(RecipeListContainer)