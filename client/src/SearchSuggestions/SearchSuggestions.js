import { Link } from 'react-router-dom';
import './SearchSuggestions.css';

const SearchSuggestions = (props) => {
	const { searchTerm } = props;

	if (data.searchRecipes.length > 0) {
		console.log(data.searchRecipes);

		let searchArr = data.searchRecipes.map(({ name }) => (
			<Link to={`/details/${encodeURIComponent(name)}`}>
				<li>{name}</li>
			</Link>
		));

		return (
			<div className="SearchResults" onClick={props.onClick}>
				<ul>{searchArr}</ul>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default SearchSuggestions;
