import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { masonrySizes } from '../../helpers/breakpoints';

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
      masonryContentsLoaded: false
    }

    this.loaded = 0

    this.filterProjects = this.filterProjects.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Work"
    this.filterProjects(this.state.visible)
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.visible !== nextState.visible) {
      this.filterProjects(nextState.visible)
      this.setState({ masonryContentsLoaded: false })
    }
  }

  handleImageLoad() {
    this.loaded += 1
    if (this.loaded == this.projects.length - 1) {
      this.setState({ masonryContentsLoaded: true })
      if (this.props.onLoad) {
        this.props.onLoad()
      }
    }
  }

  loadMore() {
    this.setState({
      visible: this.state.visible * 2,
      masonryContentsLoaded: false
    })
  }

  filterProjects(visible) {
    this.projects = this.state.projects.list.filter((project, index) => {
      if (index < visible) {
        return project
      }
    })

    this.projects = this.projects.map((project, index) => {
      let data = require(`../../Projects/${project}/data.json`);
      let link = `/projects/${project}`;
      let key = `card-${index+1}`
      return (
        <ProjectCard
          key={key}
          id={key}
          project={project}
          link={link}
          onLoad={this.handleImageLoad}
          data={data}
          sizes={masonrySizes}
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
          ref={(elem) => this.masonry = elem}
          minWidth={400}
          margin={16}
        >
          {this.projects}
        </Masonry>
        {loadMore}
      </div>
    )
  }
  
}

export default ProjectList;