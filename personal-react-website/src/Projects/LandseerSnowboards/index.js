import React, { Component } from 'react';

import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages';

import styles from './styles.css';

class LandseerSnowboards extends Component {
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
        project="LandseerSnowboards"
      />
    )
  }
}

export default LandseerSnowboards;