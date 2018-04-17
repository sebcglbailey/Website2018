import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ScrollToTop from './ScrollToTop/ScrollToTop';

import './App.css';
import styles from './App.css';

import Header from './Header/Header';
import Projects from '../Pages/Projects';
import Work from '../Pages/Work';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';

import SplashLogo from './SplashLogo/SplashLogo';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectsLoaded: false
    }

    this.handleProjectsLoaded = this.handleProjectsLoaded.bind(this)
  }

  handleProjectsLoaded() {
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
                <Route exact path="/" render={() => <Projects
                  onLoad={this.handleProjectsLoaded} />} />
                <Route path="/projects" render={() => <Projects
                  onLoad={this.handleProjectsLoaded} />} />
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
