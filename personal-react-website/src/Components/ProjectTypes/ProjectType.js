import React, { Component } from 'react';

import styles from './styles.css';
import {toggleType} from './functions';

class ProjectType extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      className: this.props.className
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if (this.state.type !== nextState.type) {
      this.setState({
        type: nextState.type,
        className: nextState.className
      })
    }
  }

  handleClick() {

    this.setState({
      type: toggleType(this.state.type)
    });

  }

  render() {
    return(
      <li
      style={this.style}
      onClick={this.handleClick}
      className={`${this.state.className}`}>
        {this.state.type}
      </li>
    )
  }
}

export default ProjectType