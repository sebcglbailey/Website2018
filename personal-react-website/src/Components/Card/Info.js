import React, {Component} from 'react';

import styles from './styles.css';

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
    if (this.state.hasCover) {
      classes = {
        container: `${styles.infoContainer} ${styles.loaded}`,
        info: `${styles.info} ${styles.loaded}`
      }
    } else {
      classes = {
        container: styles.infoContainer,
        info: styles.info
      }
    }
    this.setState({
      containerClass: classes.container,
      infoClass: classes.info
    })
  }

  render() {

    return(
      <div className={this.state.containerClass}>
        <div className={this.state.infoClass}>
          { this.props.header ? (
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