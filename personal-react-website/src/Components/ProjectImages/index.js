import React, {Component} from 'react';

import styles from './styles.css';

class ProjectImages extends Component {
	constructor(props) {
		super(props)

		this.state = {
			images: this.props.images,
			loaded: 0
		}

		this.getImages = this.getImages.bind(this)
		this.handleImageLoaded = this.handleImageLoaded.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.images !== this.props.images) {
			this.setState({ images: nextProps.images })
		}
	}

	handleImageLoaded() {
		if (this.props.onLoad && this.state.loaded == this.props.images.length - 1) {
			this.props.onLoad()
		} else {
			this.setState({ loaded: this.state.loaded + 1 })
		}
	}

	getImages() {
		let images = this.state.images.map((imgName, index) => {
			let imgSrc = require(`../../Projects/${this.props.project}/img/${imgName}`)
			return <img onLoad={this.handleImageLoaded} key={`image-${index+1}`} src={imgSrc} />
		})
		return images
	}

	render() {
		let images = this.props.images ? this.getImages() : this.props.content ? this.props.content : null
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