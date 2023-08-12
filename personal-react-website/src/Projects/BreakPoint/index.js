import React, { Component } from 'react';

import ProjectImages from '../../Components/ProjectImages/';

import data from './data.json';

class BreakPoint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ProjectImages
        images={data.images}
        project="BreakPoint"
      />
    )
  }
}

export default BreakPoint;