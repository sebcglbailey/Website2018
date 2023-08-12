import React, { Component } from 'react';

import Image from '../Image/';

import './styles.scss';

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
		if (nextProps.images && nextProps.images !== this.props.images) {
			this.setState({
				contentImages: this.getImages(),
				images: nextProps.images
			})
		} else if (nextProps.content && nextProps.content !== this.props.content) {
			this.setState({
				contentImages: nextProps.content,
				images: nextProps.images
			})
		}
	}

	componentWillMount() {
		let images = this.props.images ? this.getImages() : this.props.content ? this.props.content : null
		this.setState({ contentImages: images })
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
			return (
				<Image
					onLoad={this.handleImageLoaded}
					key={`image-${index + 1}`}
					name={imgName}
					path={`Projects/${this.props.project}/src/${imgName}/`}
					sizes="(min-width: 50rem) 50rem, 98vw"
				/>
			)
		})
		return images
	}

	render() {
		return (
			<div className='imagesContainer'>
				<div className='images'>
					{this.state.contentImages}
				</div>
			</div>
		)
	}
}

export default ProjectImages