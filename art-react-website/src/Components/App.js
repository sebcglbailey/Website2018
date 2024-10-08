import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import './App.scss';

import ScrollToTop from './ScrollToTop/';

import Header from './Header/';
import Home from '../Pages/Home/';
import Detail from '../Pages/Detail/';
import Art from '../Pages/Art/';
import Paper from '../Pages/Paper/';
import Bio from '../Pages/Bio/';
import Commissions from '../Pages/Commissions/';

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

                  <Route path="/product/:id"
                    render={({ match }) => <Detail
                      piece={match.params.id}
                      type="ARTWORK" />}
                  />

                  <Route path="/featured/:id"
                    render={({ match }) => <Detail
                      piece={match.params.id} 
                      featured
                      type="ARTWORK" />}
                  />

                  <Route path="/works-on-paper/:id"
                    render={({ match }) => <Detail
                      piece={match.params.id} 
                      type="PAPER" />}
                  />

                  <Route path="/bio"
                    render={() => <Bio />}
                  />

                  <Route path="/commissions"
                    render={() => <Commissions />}
                  />

                  <Route path="/art"
                    render={() => <Art
                      onLoad={this.handlePageLoad} />}
                  />

                  <Route path="/works-on-paper"
                    render={() => <Paper
                      onLoad={this.handlePageLoad} />}
                  />

                  <Route path="/"
                    render={() => <Home
                      onLoad={this.handlePageLoad} />}
                  />

                  <Redirect from="/" to="/" />

                  <Route render={() => <Redirect to="/" />} />

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
