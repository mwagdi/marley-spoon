import React from "react";

export default ({ recipe }) => {
	console.log(recipe)
	return (
		<div className="main-container">
			<div className="details flex-container">
				<div className="details__left">
					{/* {recipe.photo &&
					<img src={recipe.photo.url} alt="recipe photo" />} */}
				</div>
				<div className="details__right">
					<h1>{recipe.title}</h1>
				</div>
			</div>
		</div>
	)
}
