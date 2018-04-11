import React, { Component } from 'react';

import CoverImage from '../CoverImage/CoverImage';
import ProjectIntro from '../ProjectIntro/ProjectIntro';
import ProjectImages from '../ProjectImages/ProjectImages';
import ProjectCard from '../ProjectCard/ProjectCard';
import Masonry from '../Masonry/Masonry';

import styles from './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.project
    }
  }

  componentWillReceiveProps(nextState) {
    if (nextState.project !== this.state.project) {
      this.setState({ project: nextState.project })
    }
  }

  render() {

    let project = require(`../../Projects/${this.state.project}/${this.state.project}.js`)
    project = project.default

    let data = require(`../../Projects/${this.state.project}/data.json`);
    let manifest = require(`../../Projects/${this.state.project}/manifest.js`);
    let cover = require(`../../Projects/${this.state.project}/cover.jpg`);

    let relatedProjects = manifest.related.map((project, index) => {
      let link = `/projects/${project}`;
      let cover = require(`../../Projects/${project}/cover.jpg`);
      let manifest = require(`../../Projects/${project}/manifest.js`);
      return(
        <ProjectCard
          id={`card-${index}`}
          key={index}
          project={project}
          link={link}
          cover={cover}
          manifest={manifest}
        />
      )
    })

    return (
      <div>
        <ProjectIntro
          cover={cover}
          manifest={manifest}
        />
        <ProjectImages
          images={data.images}
          project={this.state.project}
        />
        <div className={styles.related}>
          <Masonry
            minWidth={400}
            margin={16}>
            {relatedProjects}
          </Masonry>
        </div>
      </div>
    )
  }
  
}

export default Project;