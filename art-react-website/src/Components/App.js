import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import './App.scss';

import ScrollToTop from './ScrollToTop/';

import Header from './Header/';
import Art from '../Pages/Art/';

// TODO: rename all pages and components jsx files to index.js

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

                  <Route path="/"
                    render={() => <Art
                      onLoad={this.handlePageLoad} />}
                  />

                  <Redirect from="/" to="/" />

                </Switch>
              </div>
            </div>
          </ScrollToTop>
        </div>
      </Router>
    );
  }
}

export default App;
