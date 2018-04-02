import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './ProjectList.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: this.props.columns,
      items: this.props.columns - 1
    }

    this.sortedProjects = []

    this.getProjectsAtStart = this.getProjectsAtStart.bind(this)
    this.getProjectAtIndex = this.getProjectAtIndex.bind(this)
    this.getShortestColumnIndex = this.getShortestColumnIndex.bind(this)
    this.renderColumns = this.renderColumns.bind(this)
  }

  componentWillMount() {
    this.columns = []
    let projects = this.getProjectsAtStart();
    for (let i = 0; i < this.state.columns; i++) {
      this.sortedProjects.push([projects[i]]);
    }
    this.renderColumns()
  }

  componentDidMount() {
    this.setState({ items: this.state.items + 1 })
  }

  componentDidUpdate() {
    if (this.state.items < this.props.projects.length) {
      let shortestColumnIndex = this.getShortestColumnIndex()
      let newProject = this.getProjectAtIndex(this.state.items)
      this.sortedProjects[shortestColumnIndex].push(newProject)
      this.renderColumns()
      this.setState({ items: this.state.items + 1 })
    }
  }

  renderColumns() {
    this.columns = []
    for (let i = 0; i < this.sortedProjects.length; i++) {
      let columnArray = this.sortedProjects[i];
      this.columns.push(
        <div className={styles.column}>
          {columnArray}
        </div>
      )
    }
  }

  getShortestColumnIndex() {
    let shortestColumnIndex = 0;
    let shortestColumn = this.elem.children[0]
    for (let i = 0; i < this.elem.children.length; i++) {
      let thisColumn = this.elem.children[i]
      if (thisColumn.clientHeight < shortestColumn.clientHeight) {
        shortestColumnIndex = i;
        shortestColumn = thisColumn
      }
    }
    return shortestColumnIndex;
  }

  getProjectsAtStart() {
    return this.props.projects.filter((project, index) => {
      if (index < this.state.columns) {
        return project
      }
    })
  }

  getProjectAtIndex(i) {
    return this.props.projects[i]
  }

  render() {
    return(
      <div ref={(elem) => {this.elem = elem}} className={styles.container}>
        {this.columns}
      </div>
    )
  }
}

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: 3
    }

    this.getColumnItems = this.getColumnItems.bind(this);
  }

  getColumnItems(column) {
    let projects = this.props.projects.list.filter((project, i) => {
      if (i%this.state.columns + 1 == column) {
        return project
      }
    }) 
    projects = projects.map((project, i) => {
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
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })
    return projects
  }

  componentWillMount() {
    this.projects = this.props.projects.list.map((project) => {
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
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })

    let column1 = this.getColumnItems(1);
    let column2 = this.getColumnItems(2);
    let column3 = this.getColumnItems(3);
    let columns = [column1, column2, column3]
    this.columns = columns.map((column) => {
      return (
        <div className={styles.column}>
          {column}
        </div>
      )
    });
  }

  render() {
    return (
      <Masonry columns={3} projects={this.projects} />
    )
  }
  
}

export default ProjectList;