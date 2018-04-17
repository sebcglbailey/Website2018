import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './ProjectCard.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props)

    this.state = {
      link: this.props.link,
      cover: this.props.cover ? this.props.cover : null,
      project: this.props.project,
      manifest: this.props.manifest,
      coverLoaded: false
    }

    this.handleImageLoad = this.handleImageLoad.bind(this)
	}

  componentWillReceiveProps(nextState) {
    if (nextState.project !== this.state.project) {
      this.setState({
        link: nextState.link,
        cover: nextState.cover ? nextState.cover : null,
        project: nextState.project,
        manifest: nextState.manifest
      })
    }
  }

  handleImageLoad() {
    this.setState({ coverLoaded: true })

    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

	render() {
    /*
      Setting the classes for handling image loading on the card
    */
    let infoClasses = {};
    if (this.state.coverLoaded) {
      infoClasses = {
        container: `${styles.infoContainer} ${styles.loaded}`,
        info: `${styles.info} ${styles.loaded}`
      }
    } else {
      infoClasses = {
        container: styles.infoContainer,
        info: styles.info
      }
    }

		return(
			<div id={this.props.id} className={styles.card}>
        <Link to={this.state.link}>
          <div className={styles.cardContent}>
            {
              this.state.cover ? (
                <div className={styles.cover}>
                  <img onLoad={this.handleImageLoad} src={this.state.cover} />
                </div>
              ) : null
            }
            <div className={infoClasses.container}>
              <div className={infoClasses.info}>
                <h2>{this.state.manifest.title}</h2>
                <p
                  ref={(elem) => {this.desc = elem}}
                  dangerouslySetInnerHTML={{__html: this.state.manifest.description[0]}}></p>
              </div>
            </div>
          </div>
        </Link>
      </div>
		)
	}
}

export default ProjectCard