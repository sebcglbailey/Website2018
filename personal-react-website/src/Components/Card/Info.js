import React, {Component} from 'react';

import styles from './styles.css';

class Info extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasCover: this.props.hasCover
    }
  }

  componentWillReceiveProps(nextState) {
    if (this.state.hasCover !== nextState.hasCover) {
      this.setState({ hasCover: nextState.hasCover })
    }
  }

  render() {

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
    let {container, info} = classes

    return(
      <div className={container}>
        <div className={info}>
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