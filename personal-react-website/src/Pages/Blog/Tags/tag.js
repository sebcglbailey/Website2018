import React, { Component } from 'react';

import SVG from '../../../Components/SVG/';

import styles from './styles.css';

class Tag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      selected: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {

    this.setState({ selected: !this.state.selected })

    if (this.props.onClick) {
      this.props.onClick(this.state.id, !this.state.selected)
    }

  }

  render() {

    let className = this.state.selected ? `${styles.tag} ${styles.selected}` : styles.tag

    return(
      <li
        onClick={this.handleClick}
        className={className}
      >
        {this.state.id}
        {
          this.state.selected ? (
            <SVG id="cross" color={"#fff"} width={16} height={16} />
          ) : null
        }
      </li>
    )
  }
}

export default Tag