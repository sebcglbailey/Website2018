import React, { Component } from 'react';

import projects from '../../Projects/projects';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.project = projects.pages[this.props.project]
  }

  render() {
    return (
      <this.project />
    )
  }
  
}

export default Project;