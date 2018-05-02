import React, { Component } from 'react';

import ProjectIntro from '../../Components/ProjectIntro/';
import Masonry from '../../Components/Masonry/';
import Card from '../../Components/Card/';

import styles from './styles.css';

import manifest from './manifest';
import data from './data.json';

import cover from './cover.jpg';

class China extends Component {
  constructor(props) {
    super(props)

    this.loaded = 0

    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  componentWillMount() {
    let images = data.images.map((image, index) => {
      let src = require(`./img/${image}`)
      return(
        <Card key={`image-${index}`}>
          <img
            src={src}
            className={styles.photo}
            onLoad={this.handleImageLoad}
          />
        </Card>
      )
    })
    this.setState({ images: images })
  }

  handleImageLoad() {
    this.loaded += 1
    if (this.loaded == data.images.length) {
      this.masonry.renderColumns()
    }
  }

  render() {
    return(
      <Masonry ref={(elem) => {this.masonry = elem}}>
        {this.state.images}
      </Masonry>
    )
  }
}

export default China;