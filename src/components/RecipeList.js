import React from "react";
import { Link } from "react-router-dom";

const RecipeListItem = ({ id, recipe, image }) => (
	<li className="RecipeList__item">
		<Link to={`/${id}`}>
			{image && <img src={image.url} alt={image.fileName} />}
			{recipe.title && <h3 className="RecipeList__item_title">{recipe.title}</h3>}
		</Link>
	</li>
);

export const RecipeList = ({ recipeIds, recipesById, assets }) => (
	<ul className="RecipeList flex-container">
		{recipeIds.map((id, i) => (
			<RecipeListItem
				key={i}
				id={id}
				recipe={recipesById[id]}
				image={assets[recipesById[id].photo.sys.id]}
			/>
		))}
	</ul>
);
