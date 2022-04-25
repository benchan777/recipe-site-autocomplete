import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard(props) {
	const { name, servings } = props;
	return (
		<Link to={`/details/${encodeURIComponent(name)}`} className="RecipeCardLink">
			<div className="RecipeCard">
				<h1>{name}</h1>
				<h4>Yield: {servings}</h4>
			</div>
		</Link>
	);
}

export default RecipeCard;
