import React, { Component } from 'react';

import CoverImage from '../CoverImage/CoverImage';
import ProjectTypes from '../ProjectTypes/ProjectTypes';

import styles from './ProjectIntro.css';

class ProjectIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    let description = this.props.manifest.description ? this.props.manifest.description : ""
    if (typeof description == "string") {
      this.setState({ description: [description] })
    } else {
      this.setState({ description: description })
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
        <CoverImage image={this.props.cover} />
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