import React, { Component } from 'react';

import CoverImage from '../CoverImage/';
import ProjectTypes from '../ProjectTypes/';

import styles from './styles.css';

class ProjectIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleCoverImageLoad = this.handleCoverImageLoad.bind(this)
  }

  componentWillMount() {
    let description = this.props.manifest.description ? this.props.manifest.description : ""
    if (typeof description == "string") {
      this.setState({ description: [description] })
    } else {
      this.setState({ description: description })
    }
  }

  handleCoverImageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    let description = this.state.description.map((para, index) => {
      return (
        <p
          key={`description-para-${index+1}`}
          className={styles.description}
          dangerouslySetInnerHTML={{__html: para}}>
        </p>
      )
    })
    return(
      <div className={styles.flexContainer}>
        <CoverImage onLoad={this.handleCoverImageLoad} image={this.props.cover} />
        <div className={styles.container}>
          <ProjectTypes types={this.props.manifest.types} />
          <h1 className={styles.title}>{this.props.manifest.title}</h1>
          {description}
        </div>
      </div>
    )
  }
}

export default ProjectIntro;