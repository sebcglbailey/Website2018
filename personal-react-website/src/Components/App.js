import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ScrollToTop from './ScrollToTop/ScrollToTop';

import './App.css';
import styles from './App.css';

import Header from './Header/Header';
import ProjectList from '../Pages/ProjectList/ProjectList';
import Project from '../Pages/Project/Project';
import Work from '../Pages/Work';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';

import projects from '../Projects/js/projects';

import SplashLogo from './SplashLogo/SplashLogo';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectsLoaded: false
    }

    this.handlePageLoad = this.handlePageLoad.bind(this)
  }

  handlePageLoad() {
    this.setState({ projectsLoaded: true })
  }

  render() {
    return (
      <Router>
        <div>
          <ScrollToTop>
            <div className="container">
              <Header />
              <div className={styles.view}>
                <Route exact path="/"
                  render={() => <ProjectList
                    projects={projects}
                    onLoad={this.handlePageLoad} />}
                />
                <Route exact path="/projects"
                  render={() => <ProjectList
                    projects={projects}
                    onLoad={this.handlePageLoad} />}
                />
                <Route path="/projects/:id"
                  render={({ match }) => <Project
                    project={match.params.id}
                    onLoad={this.handlePageLoad} />}
                />
                <Route path="/work" component={Work} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
              </div>
            </div>
          </ScrollToTop>
          <SplashLogo
            delay={500}
            ready={this.state.projectsLoaded} />
        </div>
      </Router>
    );
  }
}

export default App;
