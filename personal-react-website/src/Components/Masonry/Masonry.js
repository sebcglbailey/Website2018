import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Masonry.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: this.props.columns,
      items: this.props.columns - 1,
      columnsContent: []
    }

    this.getProjectsAtStart = this.getProjectsAtStart.bind(this)
    this.getProjectAtIndex = this.getProjectAtIndex.bind(this)
    this.getShortestColumnIndex = this.getShortestColumnIndex.bind(this)
    this.renderColumns = this.renderColumns.bind(this)
    this.renderStart = this.renderStart.bind(this)
    this.windowResize = this.windowResize.bind(this)
  }

  componentWillUpdate(prevState, nextState) {
    if (prevState.columns !== nextState.columns) {
      this.renderStart()
    }
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResize);
    this.renderStart()
  }

  componentDidMount() {
    this.setState({ items: this.state.items + 1 })
  }

  componentDidUpdate() {
    if (this.state.items < this.props.content.length) {
      let shortestColumnIndex = this.getShortestColumnIndex()
      let newProject = this.getProjectAtIndex(this.state.items)
      this.sortedProjects[shortestColumnIndex].push(newProject)
      this.renderColumns()
      this.setState({ items: this.state.items + 1 })
    }
  }

  windowResize() {
    let windowWidth = window.outerWidth;
    if (windowWidth < 1232) {
      this.setState({ columns: 2, items: 1 });
    }
  }

  renderStart() {
    this.sortedProjects = []
    let projects = this.getProjectsAtStart();
    for (let i = 0; i < this.state.columns; i++) {
      this.sortedProjects.push([projects[i]]);
    }
    this.renderColumns()
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
    return this.props.content.filter((project, index) => {
      if (index < this.state.columns) {
        return project
      }
    })
  }

  getProjectAtIndex(i) {
    return this.props.content[i]
  }

  render() {
    return(
      <div ref={(elem) => {this.elem = elem}} className={styles.container}>
        {this.columns}
      </div>
    )
  }
}

export default Masonry;