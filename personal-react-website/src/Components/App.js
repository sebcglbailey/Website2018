import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import './App.scss';

import ScrollToTop from './ScrollToTop/';

import Header from './Header/';
import CV from '../Pages/CV/';
import DeviceSize from '../Pages/DeviceSize';

import Slate from '../Pages/CaseStudies/clearscore-slate';

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Password setToken={setToken} />
  // }

  return (
    <Router>
      <div>

        <ScrollToTop>
          <div className='container'>

            <Header />

            <div className='view'>
              <Switch>

                <Route exact path="/resume">
                  <CV />
                </Route>

                <Route path="/resume/clearscore-design-system">
                  <Slate />
                </Route>

                <Route path="/device-size">
                  <DeviceSize />
                </Route>

                <Redirect exact from="/" to="/resume" />
                <Redirect from="/projects" to="/resume" />
                <Redirect from="/projects/" to="/resume" />
                <Redirect from="/projects/:id" to="/resume" />
                <Redirect from="/extras" to="/resume" />
                <Redirect from="/extras/" to="/resume" />
                <Redirect from="/extras/:id" to="/resume" />

              </Switch>
            </div>
          </div>
        </ScrollToTop>
      </div>
    </Router>
  )
}

export default App;
