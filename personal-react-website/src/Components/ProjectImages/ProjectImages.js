import React, {Component} from 'react';

import styles from './ProjectImages.css';

class ProjectImages extends Component {
	constructor(props) {
		super(props)

		this.state = {
			images: this.props.images
		}

		this.getImages = this.getImages.bind(this)
	}

	componentWillReceiveProps(nextState) {
		if (nextState.images !== this.state.images) {
			this.setState({ images: nextState.images })
		}
	}

	getImages() {
		let images = this.state.images.map((imgName) => {
			let imgSrc = require(`../../Projects/${this.props.project}/img/${imgName}`)
			return <img src={imgSrc} />
		})
		return images
	}

	render() {
		let images = this.getImages()
		return(
			<div className={styles.container}>
				<div className={styles.images}>
					{images}
				</div>
			</div>
		)
	}
}

export default ProjectImages