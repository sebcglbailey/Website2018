import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectList from '../Components/ProjectList/ProjectList';
import Project from '../Components/Project/Project';

import projects from '../Projects/projects';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectList: this.props.projectList
    }
  }

  componentWillMount() {
    document.title = "Projects";
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        
        <Route exact path="/"
          render={() => <ProjectList projects={this.state.projectList} />}
        />
        <Route exact path="/projects"
          render={() => <ProjectList projects={this.state.projectList} />}
        />
      </div>
    )
  }
  
}

export default Projects;