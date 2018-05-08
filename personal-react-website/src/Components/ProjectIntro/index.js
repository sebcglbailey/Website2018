import React, { Component } from 'react';

import CoverImage from '../CoverImage/';
import InfoList from '../InfoList/';

import styles from './styles.css';

class ProjectIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      manifest: this.props.manifest
    }

    this.handleCoverImageLoad = this.handleCoverImageLoad.bind(this)
  }

  componentWillMount() {
    this.setState({
      types: this.state.manifest && this.state.manifest.types ? this.state.manifest.types : null,
      title: this.state.manifest && this.state.manifest.title ? this.state.manifest.title : null,
      description: this.state.manifest && this.state.manifest.description ? this.state.manifest.description : null
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.manifest && this.props.manifest !== nextProps.manifest) {
      this.setState({
        types: nextProps.manifest.types,
        title: nextProps.manifest.title,
        description: nextProps.manifest.description
      })
    }
  }

  handleCoverImageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {

    let description = typeof(this.state.description) == "object" ? this.state.description.map((para, index) => {
      return (
        <p
          key={`description-para-${index+1}`}
          className={styles.description}
          dangerouslySetInnerHTML={{__html: para}}>
        </p>
      )
    }) : typeof(this.state.description) == "string" ? this.state.description : null

    return(
      <div className={styles.flexContainer}>
        <CoverImage onLoad={this.handleCoverImageLoad} image={this.props.cover} />
        <div className={styles.container}>
          <InfoList types={this.state.manifest.types} />
          <h1 className={styles.title}>{this.state.manifest.title}</h1>
          {description}
        </div>
      </div>
    )
  }
}

export default ProjectIntro;