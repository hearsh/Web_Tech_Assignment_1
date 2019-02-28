import React from 'react';
import styles from './style';

const HomePage = (props) => {
	return (
		<div className="content">
			<header style={styles.headerStyle}>
				<h1>Welcome to the World of StarWars</h1>
				<h3>{props.message}</h3>
			</header>
		</div>
	);
}

export default HomePage