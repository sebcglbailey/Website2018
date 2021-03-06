import React, { Component } from 'react';

import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages/';

import styles from './styles.css';

import manifest from './manifest';

import data from './data.json';

class BreakPoint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ProjectImages
        images={data.images}
        project="BreakPoint"
      />
    )
  }
}

export default BreakPoint;