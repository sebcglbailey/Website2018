import React, { Component } from 'react';

import './styles.scss';

class Info extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasCover: this.props.hasCover
    }

    this.setClass = this.setClass.bind(this)

  }

  componentWillMount() {
    this.setClass()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.hasCover !== nextProps.hasCover) {
      this.setState({ hasCover: nextProps.hasCover })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasCover !== this.state.hasCover) {
      this.setClass()
    }
  }

  setClass() {
    let classes = {}
    if (this.state.hasCover && this.props.landscape) {
      classes = {
        container: `infoContainer landscape loaded`,
        info: `info landscape loaded`
      }
    } else if (this.state.hasCover) {
      classes = {
        container: `infoContainer loaded`,
        info: `info loaded`
      }
    } else if (this.state.landscape) {
      classes = {
        container: `infoContainer landscape`,
        info: `info landscape`
      }
    } else {
      classes = {
        container: 'infoContainer',
        info: 'info'
      }
    }
    this.setState({
      containerClass: classes.container,
      infoClass: classes.info
    })
  }

  render() {

    return (
      <div className={this.state.containerClass}>
        <div className={this.state.infoClass}>
          {this.props.header ? (
            <h3>{this.props.header}</h3>
          ) : null
          }
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Info