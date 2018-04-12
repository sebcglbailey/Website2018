import React, { Component } from 'react';

import styles from './ProjectTypes.css';

import ProjectType from './ProjectType';

import { getTypeClass } from './functions';

class ProjectTypes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      types: this.props.types
    }
  }

  componentWillReceiveProps(nextState) {
    if (this.state.types !== nextState.types) {
      this.setState({ types: nextState.types })
    }
  }

  render() {

    const types = this.state.types.map((type, index) => {
      return(
        <ProjectType
          key={`type-${index+1}`}
          duration={0}
          type={type}
          className={getTypeClass(type, styles)}
        />
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