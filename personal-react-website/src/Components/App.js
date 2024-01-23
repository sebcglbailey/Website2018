import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import './App.scss';

import ScrollToTop from './ScrollToTop/';

import Header from './Header/';
import ProjectList from '../Pages/ProjectList/';
import Project from '../Pages/Project/';
import CV from '../Pages/CV/';
import Extras, { Images } from '../Pages/Extras/';
import Contact from '../Pages/Contact/';
import DeviceSize from '../Pages/DeviceSize';

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
            <div className='container'>

              <Header />

              <div className='view'>
                <Switch>

                  {/* <Route exact path="/projects"
                    render={() => <ProjectList
                      projects={projects}
                      onLoad={this.handlePageLoad} />}
                  /> */}

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

                  <Route path="/contact"
                    render={() => <Contact
                      onLoad={this.handlePageLoad} />}
                  />

                  <Route path="/device-size"
                    render={() => <DeviceSize />}
                  />

                  <Redirect exact from="/" to="/resume" />
                  <Redirect from="/projects/" to="/resume" />

                  <Route
                    render={() => <ProjectList
                      projects={projects}
                      onLoad={this.handlePageLoad} />}
                  />

                </Switch>
              </div>
            </div>
          </ScrollToTop>
          {/*<SplashLogo
            delay={250}
            ready={this.state.projectsLoaded}
          />*/}
        </div>
      </Router>
    );
  }
}

export default App;
