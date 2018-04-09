import React, { Component } from 'react';

import CoverImage from '../CoverImage/CoverImage';
import ProjectIntro from '../ProjectIntro/ProjectIntro';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.project = require(`../../Projects/${this.props.project}/${this.props.project}.js`)
    this.project = this.project.default

    this.manifest = require(`../../Projects/${this.props.project}/manifest.js`);
  }

  render() {
    return (
      <div>
        <this.project />
      </div>
    )
  }
  
}

export default Project;