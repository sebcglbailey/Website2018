import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './ProjectCard.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props)

    this.state = {
      link: this.props.link,
      cover: this.props.cover,
      project: this.props.project,
      manifest: this.props.manifest
    }
	}

  componentWillReceiveProps(nextState) {
    if (nextState.project !== this.state.project) {
      this.setState({
        link: nextState.link,
        cover: nextState.cover,
        project: nextState.project,
        manifest: nextState.manifest
      })
    }
  }

  componentDidMount() {
    this.desc.innerHTML = this.state.manifest.description[0]
  }

	render() {
		return(
			<div className={styles.card}>
        <Link to={this.state.link}>
          <div className={styles.cardContent}>
            <div className={styles.cover}>
              <img src={this.state.cover} />
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <h2>{this.state.manifest.title}</h2>
                <p ref={(elem) => {this.desc = elem}}></p>
              </div>
            </div>
          </div>
        </Link>
      </div>
		)
	}
}

export default ProjectCard