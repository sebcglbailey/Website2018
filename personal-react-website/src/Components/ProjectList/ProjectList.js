import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './ProjectList.css';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    let projects = this.props.projects.map((project) => { 
      let link = `/projects/${project}`;
      let cover = require(`../../Projects/${project}/cover.jpg`);
      console.log(cover)
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
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.projects}
      </div>
    )
  }
  
}

export default ProjectList;