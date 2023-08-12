import React, { Component } from 'react';

import './styles.scss';

import InfoItem from './InfoItem';

import { getTypeClass } from './functions';

class InfoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      types: this.props.types
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if (this.state.types !== nextState.types) {
      this.setState({ types: nextState.types })
    }
  }

  handleItemClick(ref) {

    if (this.props.onClick) {
      this.props.onClick(ref)
    }

  }

  render() {

    const types = this.state.types.map((type, index) => {
      return (
        <InfoItem
          key={`type-${index + 1}`}
          duration={0}
          type={type}
          className={this.props.default ? getTypeClass(null) : getTypeClass(type)}
          onClick={this.handleItemClick}
          default={this.props.default ? this.props.default : false}
        />
      )
    })

    return (
      <ul className='typeList'>
        {types}
      </ul>
    )

  }

}

export default InfoList;