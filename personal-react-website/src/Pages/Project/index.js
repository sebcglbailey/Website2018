import React, { Component } from 'react';

import CoverImage from '../../Components/CoverImage/';
import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages/';
import ProjectCard from '../../Components/ProjectCard/';
import Masonry from '../../Components/Masonry/';

import styles from './styles.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.project,
      cardsLoaded: 0,
      introLoaded: false,
      imagesLoaded: false
    }

    this.handleCardsLoaded = this.handleCardsLoaded.bind(this)
    this.handleIntroLoaded = this.handleIntroLoaded.bind(this)
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if (nextState.project !== this.state.project) {
      this.setState({ project: nextState.project })
    }
  }

  handleCardsLoaded() {
    if (this.props.onLoad && this.state.cardsLoaded >= 1 && this.state.introLoaded && this.state.imagesLoaded) {
      this.props.onLoad()
    } else {
      this.setState({ cardsLoaded: this.state.cardsLoaded + 1 })
    }
  }

  handleIntroLoaded() {
    if (this.props.onLoad && this.state.cardsLoaded == 2 && this.imagesLoaded) {
      this.props.onLoad()
    } else {
      this.setState({ introLoaded: true })
    }
  }

  handleImagesLoaded() {
    if (this.props.onLoad && this.state.cardsLoaded === 2 && this.state.introLoaded) {
      this.props.onLoad()
    } else {
      this.setState({ imagesLoaded: true })
    }
  }

  render() {

    let project = require(`../../Projects/${this.state.project}/index.js`)
    project = project.default

    let data = require(`../../Projects/${this.state.project}/data.json`);
    let manifest = require(`../../Projects/${this.state.project}/manifest.js`);
    let cover = require(`../../Projects/${this.state.project}/cover.jpg`);

    let relatedProjects = manifest.related.map((project, index) => {
      let link = `/projects/${project}`;
      let cover = require(`../../Projects/${project}/cover.jpg`);
      let manifest = require(`../../Projects/${project}/manifest.js`);
      let key = `card-${index+1}`
      return(
        <ProjectCard
          id={key}
          key={key}
          project={project}
          link={link}
          cover={cover}
          manifest={manifest}
          onLoad={this.handleCardsLoaded}
        />
      )
    })

    return (
      <div>
        <ProjectIntro
          cover={cover}
          manifest={manifest}
          onLoad={this.handleIntroLoaded}
        />
        <ProjectImages
          images={data.images}
          project={this.state.project}
          onLoad={this.handleImagesLoaded}
        />
        <div className={styles.related}>
          <Masonry
            minWidth={400}
            margin={16}>
            {relatedProjects}
          </Masonry>
        </div>
      </div>
    )
  }
  
}

export default Project;