import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import styles from './App.css';

import Header from './Components/Header/Header';
import Projects from './Pages/Projects';
import Work from './Pages/Work';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

import projects from './Projects/projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <div className={styles.view}>
            <Route exact path="/" render={() => <Projects projectList={projects.list} />} />
            <Route path="/projects" render={() => <Projects projectList={projects.list} />} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
