import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Masonry from '../Masonry/Masonry';

import styles from './ProjectList.css';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: 3,
      minWidth: "400px",
      margin: "1rem"
    }
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
  }

  render() {
    return (
      <Masonry
        content={this.projects}
        columns={this.state.columns}
        minWidth={this.state.minWidth}
        margin={this.state.margin}
      />
    )
  }
  
}

export default ProjectList;