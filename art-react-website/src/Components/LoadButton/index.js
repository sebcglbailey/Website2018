import React, { Component } from 'react';

import styles from './styles.css';

class LoadButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={styles.container}>
        <button onClick={this.props.onClick} className={styles.loadMore}>Load More...</button>
      </div>
    )
  }
}

export default LoadButton;