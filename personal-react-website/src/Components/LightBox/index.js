import React, { Component } from 'react';

import LightBoxGroup from './Group';

import './styles.scss';

class LightBox extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(this, this.props.index)
    }
  }

  render() {
    let children = this.props.children
    return (
      <div onClick={this.handleClick} className='link'>
        {children}
      </div>
    )
  }
}

export default LightBox;
exports.LightBoxGroup = LightBoxGroup;