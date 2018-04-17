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

    this.handleListLoad = this.handleListLoad.bind(this)
  }

  componentWillMount() {
    document.title = "Projects";
  }

  handleListLoad() {
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
            onLoad={this.handleListLoad} />}
        />
        <Route exact path="/projects"
          render={() => <ProjectList
            projects={this.state.projects}
            onLoad={this.handleListLoad} />}
        />
        <Route path="/projects/:id"
          render={({ match }) => <Project project={match.params.id} />}
        />
      </div>
    )
  }
  
}

export default Projects;