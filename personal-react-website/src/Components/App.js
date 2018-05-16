import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import styles from './App.css';

import ScrollToTop from './ScrollToTop/';

import Header from './Header/';
import ProjectList from '../Pages/ProjectList/';
import Project from '../Pages/Project/';
import CV from '../Pages/CV/';
import Extras, {Images} from '../Pages/Extras/';
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
    // this.setState({ projectsLoaded: true })
  }

  render() {
    return (
      <Router>
        <div>

          <ScrollToTop>
            <div className={styles.container}>

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

                <Route path="/resume"
                  render={() => <CV
                    onLoad={this.handlePageLoad} />}
                />

                <Route exact path="/extras"
                  render={() => <Extras
                    onLoad={this.handlePageLoad} />}
                />

                <Route path="/extras/:id"
                  render={({ match }) => <Images
                    onLoad={this.handlePageLoad}
                    id={match.params.id} />}
                />

                <Route path="/blog"
                  render={() => <Blog
                    onLoad={this.handlePageLoad} />}
                />

                <Route path="/contact"
                  render={() => <Contact
                    onLoad={this.handlePageLoad} />}
                />
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
