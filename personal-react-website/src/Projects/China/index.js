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
  }

  componentWillMount() {
    let images = data.images.map((image, index) => {
      let src = require(`./img/${image}`)
      return(
        <Card key={`image-${index}`}>
          <img
            src={src}
            className={styles.photo}
          />
        </Card>
      )
    })
    this.setState({ images: images })
  }

  render() {
    return(
      <Masonry>
        {this.state.images}
      </Masonry>
    )
  }
}

export default China;