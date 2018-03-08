import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Test from './Pages/Test/index';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        	<div>
	        	<ul className="header">
	        		<li>
	        			<Link to="/">Home</Link>
	        		</li>
	        		<li>
	        			<Link to="/test/test1">Test 1</Link>
	        		</li>
	        		<li>
	        			<Link to="/test/test2">Test 2</Link>
	        		</li>
	        	</ul>

	        	<Route path="/test/:testId" component={Test} />
        	</div>
        </Router>
      </div>
    );
  }
}

export default App;
