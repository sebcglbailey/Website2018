import React, { Component } from 'react';

import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages';

import styles from './styles.css';

class XGames extends Component {
  constructor(props) {
    super(props)

    this.state = {
      manifest: require(`./manifest`),
      data: require(`./data.json`)
    }
  }

  render() {
    return(
      <ProjectImages
        images={this.state.data.images}
        project="XGames"
      />
    )
  }
}

export default XGames;