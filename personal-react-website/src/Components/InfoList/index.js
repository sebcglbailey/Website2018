import React, { Component } from 'react';

import styles from './styles.css';

import InfoItem from './InfoItem';

import { getTypeClass } from './functions';

class InfoList extends Component {
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
        <InfoItem
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

export default InfoList;