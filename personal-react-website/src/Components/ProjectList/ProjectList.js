import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Masonry from '../Masonry/Masonry';
import LoadButton from '../LoadButton/LoadButton';

import styles from './ProjectList.css';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state ={
      visible: 6
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
    this.projects = this.props.projects.list.filter((project, index) => {
      if (index < visible) {
        return project
      }
    })

    this.projects = this.projects.map((project) => {
      let manifest = require(`../../Projects/${project}/manifest.js`);
      let link = `/projects/${project}`;
      let cover = require(`../../Projects/${project}/cover.jpg`);
      return (
        <div className={styles.card}>
          <Link to={link}>
            <div className={styles.cardContent}>
              <div className={styles.cover}>
                <img src={cover} />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.info}>
                  <h2>{project}</h2>
                  <p>{manifest.description[0]}</p>
                  <i className={styles.iconArrowNext}></i>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })
  }

  render() {
    console.log(this.state.visible, this.props.projects.list.length)
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