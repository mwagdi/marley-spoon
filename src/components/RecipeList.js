import React from 'react'
import { Link } from 'react-router-dom'

const RecipeListItem = ({ id, recipe, image }) => (
    <li className="RecipeList__item">
        <Link to={`/${id}`}>
            {image &&
            <img src={image.url} alt={image.fileName} />}
            {recipe.title &&
            <h3 className="RecipeList__item_title">{recipe.title}</h3>}
        </Link>
    </li>
)

export const RecipeList = ({ recipes, assets }) => (
    <ul className="RecipeList">
        {recipes.map((recipe, i) => <RecipeListItem key={i} id={recipe.sys.id} recipe={recipe.fields} image={recipe.fields.photo ? assets[recipe.fields.photo.sys.id] : null} />)}
    </ul>
)