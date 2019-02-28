import React from 'react';
import styles from './style';

const MakePeople = (props) => {
	return (
		<div style={styles.itemSingle}>
			<div style={styles.imageStyle}>
				<img style={styles.image} src="https://dumielauxepices.net/sites/default/files/logo-clipart-star-wars-668458-9671628.jpg" alt="prople"/>
			</div>
			<div style={styles.contentStyle}>
				<h2><b>Name</b>: {props.data.name} | <b>Birth</b>: {props.data.birth_year}</h2>
				<p><b>Eye Color</b>: {props.data.eye_color} | <b>Skin Color</b>: {props.data.skin_color} | <b>hair Color</b>: {props.data.hair_color}</p>
				<p><b>Mass</b>: {props.data.mass} | <b>Height</b>: {props.data.height} | <b>Gender</b>: {props.data.gender}</p>
			</div>
		</div>
	);
}

const MakePlanets = (props) => {
	return (
		<div style={styles.itemSingle}>
			<div style={styles.imageStyle}>
				<img style={styles.image} src="https://dumielauxepices.net/sites/default/files/logo-clipart-star-wars-668458-9671628.jpg" alt="prople"/>
			</div>
			<div style={styles.contentStyle}>
				<h2><b>Name</b>: {props.data.name} | <b>Climate</b>: {props.data.climate} | <b>Rotation Period</b>: {props.data.rotation_period}</h2>
				<p><b>Diameter</b>: {props.data.diameter} | <b>Orbital Period</b>: {props.data.orbital_period} | <b>Gravity</b>: {props.data.gravity}</p>
				<p><b>Terrain</b>: {props.data.terrain} | <b>surface Water</b>: {props.data.surface_water} | <b>Population</b>: {props.data.population}</p>
			</div>
		</div>
	);
}

const MakeSpecies = (props) => {
	return (
		<div style={styles.itemSingle}>
			<div style={styles.imageStyle}>
				<img style={styles.image} src="https://dumielauxepices.net/sites/default/files/logo-clipart-star-wars-668458-9671628.jpg" alt="prople"/>
			</div>
			<div style={styles.contentStyle}>
				<h2><b>Name</b>: {props.data.name} | <b>Classification</b>: {props.data.classification} | <b>Designation</b>: {props.data.designation}</h2>
				<p><b>Average Height</b>: {props.data.average_height} | <b>Skin Colors</b>: {props.data.skin_colors} | <b>Hair Colors</b>: {props.data.hair_colors}</p>
				<p><b>Eye Colors</b>: {props.data.eye_colors} | <b>Average Lifespan</b>: {props.data.average_lifespan} | <b>Language</b>: {props.data.language}</p>
			</div>
		</div>
	);
}

const MakeVehicles = (props) => {
	return (
		<div style={styles.itemSingle}>
			<div style={styles.imageStyle}>
				<img style={styles.image} src="https://dumielauxepices.net/sites/default/files/logo-clipart-star-wars-668458-9671628.jpg" alt="prople"/>
			</div>
			<div style={styles.contentStyle}>
				<h2><b>Name</b>: {props.data.name} | <b>Model</b>: {props.data.model} | <b>Vehicle Class</b>: {props.data.vehicle_class}</h2>
				<p><b>Manufacturer</b>: {props.data.manufacturer} | <b>Cost</b>: {props.data.cost_in_credits} | <b>length</b>: {props.data.length}</p>
				<p><b>Speed</b>: {props.data.max_atmosphering_speed} | <b>Crew</b>: {props.data.crew} | <b>Passengers</b>: {props.data.passengers} | <b>Cargo Capacity</b>: {props.data.cargo_capacity}</p>
			</div>
		</div>
	);
}

const MakeFilms = (props) => {
	return (
		<div style={styles.itemSingle}>
			<div style={styles.imageStyle}>
				<img style={styles.image} src="https://dumielauxepices.net/sites/default/files/logo-clipart-star-wars-668458-9671628.jpg" alt="prople"/>
			</div>
			<div style={styles.contentStyle}>
				<h2><b>Title</b>: {props.data.title} | <b>Episode</b>: {props.data.episode_id} | <b>Director</b>: {props.data.director}</h2>
				<p><b>Producer</b>: {props.data.producer} | <b>Release Date</b>: {props.data.release_date}</p>
				<textarea rows='10' cols='50'>
					{props.data.opening_crawl}
				</textarea>
			</div>
		</div>
	);
}



const People = (props) => {
	return (
		<div>
			<div style={styles.itemStyle}>
			{(props.name === 'People') &&
				props.data.map((data) => <MakePeople key={data.url} data={data} />)
			}
			{(props.name === 'Planets') &&
				props.data.map((data) => <MakePlanets key={data.url} data={data} />)
			}
			{(props.name === 'Films') &&
				props.data.map((data) => <MakeFilms key={data.url} data={data} />)
			}
			{(props.name === 'Species') &&
				props.data.map((data) => <MakeSpecies key={data.url} data={data} />)
			}
			{(props.name === 'Vehicles') &&
				props.data.map((data) => <MakeVehicles key={data.url} data={data} />)
			}
			</div>
		</div>
	)
}

export default People;