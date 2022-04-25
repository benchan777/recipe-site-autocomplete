const { buildSchema } = require('graphql');

export const typeDefs = buildSchema(`
type Recipe {
  id: ID!
  name: String!
  servings: String!
  ingredients: [[String!]]
  instructions: [String!]
}

type Query {
  getAllRecipes: [Recipe!]
  searchRecipes(searchTerm: String!): [Recipe]
  recipe(name: String!): Recipe
}

type Mutation {
  createRecipe(
    name: String!
    servings: String!
    ingredients: [[String!]]
    instructions: [String!]
  ): Recipe!
}`);
