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

    // let project = require(`../../Projects/${this.state.project}/index.js`)
    // project = project.default

    this.handleCardsLoaded = this.handleCardsLoaded.bind(this)
    this.handleIntroLoaded = this.handleIntroLoaded.bind(this)
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
    this.getProjectData = this.getProjectData.bind(this)
  }

  componentWillMount() {
    let data = this.getProjectData()
    this.setState({
      data: data.data,
      cover: data.cover,
      manifest: data.manifest,
      relatedProjects: data.relatedProjects
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project !== this.state.project) {
      let data = this.getProjectData(nextProps.project)
      this.setState({
        project: nextProps.project,
        data: data.data,
        cover: data.cover,
        manifest: data.manifest,
        relatedProjects: data.relatedProjects
      })
    }
  }

  getProjectData(project) {
    let thisProject = project ? project : this.state.project

    let data = require(`../../Projects/${thisProject}/data.json`);
    let manifest = require(`../../Projects/${thisProject}/manifest.js`);
    let cover = require(`../../Projects/${thisProject}/cover.jpg`);

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
        />
      )
    })

    return {
      data: data,
      manifest: manifest,
      cover: cover,
      relatedProjects: relatedProjects
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

    return (
      <div>
        <ProjectIntro
          cover={this.state.cover}
          manifest={this.state.manifest}
          onLoad={this.handleIntroLoaded}
        />
        <ProjectImages
          images={this.state.data.images}
          project={this.state.project}
          onLoad={this.handleImagesLoaded}
        />
        <div className={styles.related}>
          <Masonry
            minWidth={400}
            margin={16}>
            {this.state.relatedProjects}
          </Masonry>
        </div>
      </div>
    )
  }
  
}

export default Project;