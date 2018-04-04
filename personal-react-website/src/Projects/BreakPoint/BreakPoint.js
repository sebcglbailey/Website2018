import React, { Component } from 'react';

import CoverImage from '../../Components/CoverImage/CoverImage';


import styles from './BreakPoint.css';

import manifest from './manifest';

import cover from './cover.jpg';

class BreakPoint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <CoverImage image={cover} />
      </div>
    )
  }
}

export default BreakPoint;