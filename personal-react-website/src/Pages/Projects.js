import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectList from '../Components/ProjectList/ProjectList';
import Project from '../Components/Project/Project';

import projects from '../Projects/js/projects';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projects
    }

    this.handlePageLoad = this.handlePageLoad.bind(this)
  }

  componentWillMount() {
    document.title = "Projects";
  }

  handlePageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/"
          render={() => <ProjectList
            projects={this.state.projects}
            onLoad={this.handlePageLoad} />}
        />
        <Route exact path="/projects"
          render={() => <ProjectList
            projects={this.state.projects}
            onLoad={this.handlePageLoad} />}
        />
        <Route path="/projects/:id"
          render={({ match }) => <Project
            project={match.params.id}
            onLoad={this.handlePageLoad} />}
        />
      </div>
    )
  }
  
}

export default Projects;