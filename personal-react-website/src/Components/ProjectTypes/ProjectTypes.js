import React, { Component } from 'react';

import styles from './ProjectTypes.css';

import ProjectType from './ProjectType';

class ProjectTypes extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const types = this.props.types.map((type) => {
      return(
        <ProjectType duration={0} type={type} />
      )
    })

    return(
      <ul className={styles.typeList}>
        {types}
      </ul>
    )

  }

}

export default ProjectTypes;