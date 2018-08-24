import React, { Component } from 'react';

import styles from './styles.css';
import {toggleType} from './functions';

class InfoItem extends Component {
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

  handleClick(ref) {

    this.setState({
      type: toggleType(this.state.type)
    });

    if (this.props.onClick) {
      this.props.onClick(this.state.type)
    }

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

export default InfoItem