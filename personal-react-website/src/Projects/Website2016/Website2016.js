import React, { Component } from 'react';

import CoverImage from '../../Components/CoverImage/CoverImage';
import ProjectIntro from '../../Components/ProjectIntro/ProjectIntro';

import styles from './Website2016.css';

import manifest from './manifest';

import cover from './cover.jpg';

class Website2016 extends Component {
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

export default Website2016;