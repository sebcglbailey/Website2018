import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Masonry from '../../Components/Masonry/';
import LoadButton from '../../Components/LoadButton/';
import ProjectCard from '../../Components/ProjectCard/';

import styles from './styles.css';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 6,
      projects: this.props.projects,
      loaded: 0,
      masonryContentsLoaded: false
    }

    this.filterProjects = this.filterProjects.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  componentWillMount() {
    this.filterProjects(this.state.visible)
  }

  componentWillUpdate(prevState, nextState) {
    if (this.state.visible !== nextState.visible) {
      this.filterProjects(nextState.visible)
      this.setState({ masonryContentsLoaded: false })
    }
  }

  handleImageLoad() {
    if (
      this.state.loaded == this.projects.length - 1
      && this.props.onLoad) {
      this.setState({ masonryContentsLoaded: true })
      this.props.onLoad()
    }
    this.setState({ loaded: this.state.loaded + 1 })
  }

  loadMore() {
    this.setState({ visible: this.state.visible * 2 })
  }

  filterProjects(visible) {
    this.projects = this.state.projects.list.filter((project, index) => {
      if (index < visible) {
        return project
      }
    })

    this.projects = this.projects.map((project, index) => {
      let manifest = require(`../../Projects/${project}/manifest.js`);
      let link = `/projects/${project}`;
      let cover = require(`../../Projects/${project}/cover.jpg`);
      let key = `card-${index+1}`
      return (
        <ProjectCard
          key={key}
          id={key}
          project={project}
          link={link}
          cover={cover}
          manifest={manifest}
          onLoad={this.handleImageLoad}
        />
      )
    })
  }

  render() {
    const loadMore = this.state.visible < this.props.projects.list.length ? (
        <LoadButton
          onClick={this.loadMore}
        />
      ) : ""

    return (
      <div className={styles.container}>
        <Masonry
          minWidth={400}
          margin={16}
          contentsLoaded={this.state.masonryContentsLoaded}
        >
          {this.projects}
        </Masonry>
        {loadMore}
      </div>
    )
  }
  
}

export default ProjectList;