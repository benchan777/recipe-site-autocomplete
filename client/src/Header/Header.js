import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className="Header">
			<Link to={`/`}>
				<h1>Jackie's Recipe Database</h1>
			</Link>
			<a href="https://github.com/numel007/recipes">Readme version available here</a>
		</div>
	);
}

export default Header;
