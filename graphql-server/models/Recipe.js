import mongoose from 'mongoose';

export const Recipe = mongoose.model(
	'Recipe',
	{
		name: String,
		servings: String,
		ingredients: [[String]],
		instructions: [String],
	},
	'recipes'
);
