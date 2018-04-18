import React, { Component } from 'react';

import ProjectIntro from '../../Components/ProjectIntro/';

import styles from './styles.css';

import manifest from './manifest';

import cover from './cover.jpg';

class XGames extends Component {
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

export default XGames;