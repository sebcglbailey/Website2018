import React, { Component } from 'react';

import ProjectImages from '../../Components/ProjectImages';

import './styles.scss';

import data from './data.json';

class Website2016 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ProjectImages
        images={data.images}
        project="Website2016"
      />
    )
  }
}

export default Website2016;