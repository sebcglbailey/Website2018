import React, {Component} from 'react';

import styles from './ProjectImages.css';

class ProjectImages extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className={styles.images}></div>
		)
	}
}

export default ProjectImages