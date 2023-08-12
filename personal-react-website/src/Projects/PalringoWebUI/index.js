import React, { Component } from 'react';

import ProjectImages from '../../Components/ProjectImages';

import './styles.scss';

import data from './data.json';

class PalringoWebUI extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ProjectImages
        images={data.images}
        project="PalringoWebUI"
      />
    )
  }
}

export default PalringoWebUI;