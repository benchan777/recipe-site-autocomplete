import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import RecipesList from './RecipesList/RecipesList';
import RecipeDetails from './RecipeDetails/RecipeDetails';

const client = new ApolloClient({
	uri: 'https://recipes-graphql-api.dev.carblife.icu/graphqlapi',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<RecipesList />} />
					<Route path="/details/:name" element={<RecipeDetails />} />
				</Route>
			</Routes>
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
