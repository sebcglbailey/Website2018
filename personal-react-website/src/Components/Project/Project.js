import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.styles)
  }

  render() {
    let projectId = this.props.path.replace("/projects/", "");
    return (
      <h2 className={this.props.styles.header}>Project name: {projectId}</h2>
    )
  }
  
}

export default Project;