import React from 'react';
import styles from './style';

const NextPage = (props) => {
	return (
		<div>
			{props.nextPage && 
				<div onClick={props.change.bind(this, 'nextPage')} style={styles.next} id="right">
					Next Page
				</div>
			}
			{props.prevPage &&
				<div onClick={props.change.bind(this, 'prevPage')}  style={styles.prev} id="left">
					Prev Page
				</div>
			}
		</div>
	)
}

export default NextPage