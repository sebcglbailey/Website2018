import React, { Component } from 'react';

import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages/';

import styles from './styles.css';

import manifest from './manifest';

import cover from './cover.jpg';

const data = require('./data.json');

class BreakPoint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <ProjectIntro
          cover={cover}
          manifest={manifest}
        />
        <ProjectImages />
      </div>
    )
  }
}

export default BreakPoint;