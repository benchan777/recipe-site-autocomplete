import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router';
import './RecipeDetails.css';

function RecipeDetails() {
	const params = useParams();
	const { name } = params;

	const RECIPE_QUERY = gql`
		query GetRecipe($name: String!) {
			recipe(name: $name) {
				name
				servings
				ingredients
				instructions
			}
		}
	`;

	const { data, loading, error } = useQuery(RECIPE_QUERY, {
		variables: {
			name: name,
		},
	});

	if (loading) return 'Loading...';
	if (error) {
		console.log(error);
		return <pre>{error.message}</pre>;
	}

	const recipe = data.recipe;

	return (
		<div className="RecipeDetails">
			<h1>{recipe.name}</h1>
			<em>Yield: {recipe.servings}</em>
			<h3>INGREDIENTS</h3>
			<table className="ingredients">
				<tbody>
					<tr className="table-header">
						<th>Name</th>
						<th>Quantity</th>
					</tr>
					{recipe['ingredients'].map((ingredient, i) => {
						return (
							<tr key={`ingredient-${i}`} className="table-ingredient">
								<th>{ingredient[0]}</th>
								<th>{ingredient[1]}</th>
							</tr>
						);
					})}
				</tbody>
			</table>
			<h3>METHOD</h3>
			<ol className="method">
				{recipe['instructions'].map((instruction, i) => {
					return (
						<li key={`method-${i}`} className="instruction">
							{instruction}
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default RecipeDetails;
