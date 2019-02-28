import React from 'react'
import styles from './style'

const HomeCard = (props) => {
	return(
		<div style={styles.row}>
			<div style={styles.column}>
				<div onClick={props.getSection.bind(this, props.data.people, 'People')} style={styles.cardStyle}>
					People
				</div>
			</div>
			<div style={styles.column}>
				<div onClick={props.getSection.bind(this, props.data.planets, 'Planets')} style={styles.cardStyle}>
					Planets
				</div>
			</div>
			<div style={styles.column}>
				<div onClick={props.getSection.bind(this, props.data.films, 'Films')} style={styles.cardStyle}>
					Films
				</div>
			</div>
			<div style={styles.column}>
				<div onClick={props.getSection.bind(this, props.data.species, 'Species')} style={styles.cardStyle}>
					Species
				</div>
			</div>
			<div style={styles.column}>
				<div onClick={props.getSection.bind(this, props.data.vehicles, 'Vehicles')} style={styles.cardStyle}>
					Vehicles
				</div>
			</div>
		</div>
	)
}

export default HomeCard;