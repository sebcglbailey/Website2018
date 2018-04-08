import React, { Component } from 'react';

import CoverImage from '../../Components/CoverImage/CoverImage';
import ProjectIntro from '../../Components/ProjectIntro/ProjectIntro';

import styles from './BumpAndGrind.css';

import manifest from './manifest';

import cover from './cover.jpg';

class BumpAndGrind extends Component {
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
      </div>
    )
  }
}

export default BumpAndGrind;