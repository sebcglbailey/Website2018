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
    let description = this.state.description.map((para) => {
      return (
        <p className={styles.description}>{para}</p>
      )
    })
    return(
      <div>
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