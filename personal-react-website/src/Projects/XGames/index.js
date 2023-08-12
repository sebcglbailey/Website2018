import React, { Component } from 'react';

import ProjectImages from '../../Components/ProjectImages';

import './styles.scss';

class XGames extends Component {
  constructor(props) {
    super(props)

    this.state = {
      manifest: require(`./manifest`),
      data: require(`./data.json`)
    }
  }

  render() {
    return (
      <ProjectImages
        images={this.state.data.images}
        project="XGames"
      />
    )
  }
}

export default XGames;