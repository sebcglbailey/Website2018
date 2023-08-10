import React, { Component } from 'react';

import CoverImage from '../CoverImage/';
import InfoList from '../InfoList/';

import styles from './styles.css';

class ProjectIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }

    this.handleCoverImageLoad = this.handleCoverImageLoad.bind(this)
  }

  componentWillMount() {
    this.setState({
      types: this.state.data && this.state.data.types ? this.state.data.types : null,
      title: this.state.data && this.state.data.title ? this.state.data.title : null,
      description: this.state.data && this.state.data.description ? this.state.data.description : null,
      project: this.state.data && this.state.data.project ? this.state.data.project : null
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project !== this.props.project) {
      this.setState({
        types: nextProps.data.types,
        title: nextProps.data.title,
        description: nextProps.data.description,
        project: nextProps.data.project,
        data: nextProps.data
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
        <CoverImage
          onLoad={this.handleCoverImageLoad}
          project={this.state.project}
        />
        <div className={styles.container}>
          <InfoList types={this.state.types} />
          <h1 className={styles.title}>{this.state.title}</h1>
          {description}
        </div>
      </div>
    )
  }
}

export default ProjectIntro;