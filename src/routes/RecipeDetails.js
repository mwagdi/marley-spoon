import React from "react";

export default ({ recipe, image, tags, chef }) => (
	<div className="main-container flex-grow">
		<div className="details flex-container">
			<div className="details__left">
				<img src={image ? image.url : null} alt="recipe photo" />
			</div>
			<div className="details__right">
				<h1>{recipe.title}</h1>
				<ul className="tags flex-container">
					{tags.map((tag, i) => (
						<li className="tags__item" key={i}>
							{tag}
						</li>
					))}
				</ul>
				{chef &&
				<p className="details__text">Chef: {chef}</p>}
				<p className="details__text">{recipe.description}</p>
			</div>
		</div>
	</div>
);
