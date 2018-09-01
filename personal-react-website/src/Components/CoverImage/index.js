import React, { Component } from 'react';

import Image from '../Image/';

import styles from './styles.css';

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
        <Image
          name="cover.jpg"
          path={`Projects/${this.props.project}/src/cover.jpg/`}
          onLoad={this.handleImageLoad}
        />
      </div>
    )
  }
}

export default CoverImage;