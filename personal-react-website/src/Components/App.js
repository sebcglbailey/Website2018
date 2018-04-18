import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import styles from './App.css';

import ScrollToTop from './ScrollToTop/';

import Header from './Header/';
import ProjectList from '../Pages/ProjectList/';
import Project from '../Pages/Project/';
import CV from '../Pages/CV/';
import About from '../Pages/About/';
import Blog from '../Pages/Blog/';
import Contact from '../Pages/Contact/';

// TODO: rename all pages and components jsx files to index.js

import projects from '../Projects/js/projects';

import SplashLogo from './SplashLogo/';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectsLoaded: false
    }

    this.handlePageLoad = this.handlePageLoad.bind(this)
  }

  /*
    Function to handle the images loaded on the page.
  */
  handlePageLoad() {
    this.setState({ projectsLoaded: true })
  }

  render() {
    return (
      <Router>
        <div>
          {
            // Component to handle scrolling to top of page every time the route is changed
          }
          <ScrollToTop>
            <div className="container">
              {
                // Header component with logo and menu
              }
              <Header />
              {
                // Project List
              }
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
                {
                  // Specific project
                }
                <Route path="/projects/:id"
                  render={({ match }) => <Project
                    project={match.params.id}
                    onLoad={this.handlePageLoad} />}
                />
                {
                  // CV
                }
                <Route path="/cv"
                  render={() => <CV
                    onLoad={this.handlePageLoad} />}
                />
                {
                  // About me
                }
                <Route path="/about"
                  render={() => <About
                    onLoad={this.handlePageLoad} />}
                />
                {
                  // Blog page
                }
                <Route path="/blog"
                  render={() => <Blog
                    onLoad={this.handlePageLoad} />}
                />
                {
                  // Contact page
                }
                <Route path="/contact"
                  render={() => <Contact
                    onLoad={this.handlePageLoad} />}
                />
              </div>
            </div>
          </ScrollToTop>
          {
            // Splash page upon first entry into the site
            // animates out on first scroll or click
          }
          <SplashLogo
            delay={500}
            ready={this.state.projectsLoaded} />
        </div>
      </Router>
    );
  }
}

export default App;
