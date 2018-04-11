import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Masonry from '../Masonry/Masonry';
import LoadButton from '../LoadButton/LoadButton';
import ProjectCard from '../ProjectCard/ProjectCard';

import styles from './ProjectList.css';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state ={
      visible: 6,
      projects: this.props.projects
    }

    this.filterProjects = this.filterProjects.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  componentWillMount() {
    this.filterProjects(this.state.visible)
  }

  componentWillUpdate(prevState, nextState) {
    this.filterProjects(nextState.visible)
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
      return (
        <ProjectCard
          id={`card-${index}`}
          key={index}
          link={link}
          cover={cover}
          manifest={manifest}
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
      <div>
        <h1>Projects</h1>
        <Masonry
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