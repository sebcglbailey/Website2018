import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectList from '../Components/ProjectList/ProjectList';
import Project from '../Components/Project/Project';

import projects from '../Projects/projects';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projects
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
          render={() => <ProjectList projects={this.state.projects} />}
        />
        <Route path="/projects/:id"
          render={({ match }) => <Project project={match.params.id} />}
        />
      </div>
    )
  }
  
}

export default Projects;