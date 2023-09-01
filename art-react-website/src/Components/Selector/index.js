import React, { Component } from 'react'

import Image from './components/image';

import './styles.scss';

class Selector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="selectorContainer">
          {this.props.children}
        </div>
      )
    }

}

export default Selector;