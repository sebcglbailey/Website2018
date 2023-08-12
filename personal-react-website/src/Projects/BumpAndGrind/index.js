import React, { Component } from 'react';

import ProjectImages from '../../Components/ProjectImages';

import data from './data.json';

import './styles.scss';

class BumpAndGrind extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ProjectImages
        images={data.images}
        project="BumpAndGrind"
      />
    )
  }
}

export default BumpAndGrind;