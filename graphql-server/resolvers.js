import { Recipe } from './models/Recipe';

export const resolvers = {
	// GETS
	getAllRecipes: async () => {
		return await Recipe.find();
	},
	searchRecipes: async (args) => {
		const { searchTerm } = args;
		if (searchTerm == '') {
			return [];
		}
		return await Recipe.find({ name: { $regex: searchTerm, $options: 'i' } });
	},
	recipe: async (args) => {
		const { name } = args;
		return await Recipe.findOne({ name: name });
	},

	// MUTATIONS
	createRecipe: (args) => {
		const { name, servings, ingredients, instructions } = args;
		const recipe = new Recipe({
			name: name,
			servings: servings,
			ingredients: ingredients,
			instructions: instructions,
		});
		return recipe.save();
	},
};
