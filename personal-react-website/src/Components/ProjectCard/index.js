import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { masonrySizes } from '../../helpers/breakpoints';

import Card, {Cover, Info} from '../Card/';
import Content from '../Content/';

import styles from './styles.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props)

    this.state = {
      link: this.props.link,
      project: this.props.project,
      data: this.props.data,
      coverLoaded: false
    }

    this.handleImageLoad = this.handleImageLoad.bind(this)
	}

  componentWillReceiveProps(nextState) {
    if (nextState.project !== this.state.project) {
      this.setState({
        link: nextState.link,
        project: nextState.project,
        data: nextState.data
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
          <Cover sizes={this.props.sizes} project={this.state.project} onLoad={this.handleImageLoad} />
          <Info hasCover={this.state.coverLoaded} header={this.state.data.title}>
            <Content content={this.state.data.description[0]} />
          </Info>
        </div>
      </Card>
		)
	}
}

export default ProjectCard