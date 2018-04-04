import React, { Component } from 'react';

import styles from './CoverImage.css';

class CoverImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={styles.container}>
        <img src={this.props.image} />
      </div>
    )
  }
}

export default CoverImage;