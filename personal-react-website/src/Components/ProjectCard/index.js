import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Card, {Cover, Info} from '../Card/';

import styles from './styles.css';

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

		return(
      <Card link={this.state.link} id={this.props.id}>
        <div className={styles.cardContent}>
          {
            this.state.cover ? (
              <Cover image={this.state.cover} onLoad={this.handleImageLoad} />
            ) : null
          }
          <Info hasCover={this.state.coverLoaded} header={this.state.manifest.title}>
            <p
                ref={(elem) => {this.desc = elem}}
                dangerouslySetInnerHTML={{__html: this.state.manifest.description[0]}}></p>
          </Info>
        </div>
      </Card>
		)
	}
}

export default ProjectCard