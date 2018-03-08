import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Projects from './manifest';

import styles from './styles';

const components = {};
Projects.map( (componentName) => {
	var component = require(`../${componentName}/index.js`).default;
	components[componentName] = component;
});

class Test extends Component {
	constructor(props) {
		super(props)

		this.state = {
			testId: this.props.match.params.testId
		}

		this.component = components[this.state.testId]
	}

	componentWillUpdate(nextProps, nextState) {

		this.component = components[nextProps.match.params.testId];

	}

	render() {
		return(
			<div>
				<h1>This is the Test class</h1>
				<Route path={`/test/${this.props.match.params.testId}`} component={this.component} />
			</div>
		)
	}
	
}

export default Test;