import React, { Component } from 'react';

import styles from './CoverImage.css';

class CoverImage extends Component {
  constructor(props) {
    super(props)

    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  handleImageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    return(
      <div className={styles.container}>
        <img onLoad={this.handleImageLoad} src={this.props.image} />
      </div>
    )
  }
}

export default CoverImage;