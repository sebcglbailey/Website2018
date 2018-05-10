import React, { Component } from 'react';

const {sizes} = require('../../helpers/imgSizes')

import ProjectIntro from '../../Components/ProjectIntro/';
import Masonry from '../../Components/Masonry/';
import Card from '../../Components/Card/';
import LightBox, { LightBoxGroup } from '../../Components/LightBox';
import Image from '../../Components/Image/';

import styles from './styles.css';

import manifest from './manifest';
import data from './data.json';

class China extends Component {
  constructor(props) {
    super(props)

    this.loaded = 0

    this.handleImageLoad = this.handleImageLoad.bind(this)
    this.handleLightBoxClick = this.handleLightBoxClick.bind(this)
  }

  componentWillMount() {
    let lightBoxContent = data.images.map((image, index) => {
      return(
        <LightBox
          index={index}
          onClick={this.handleLightBoxClick}
        >
          <Image
            className={styles.photo}
            onLoad={this.handleImageLoad}
            name={image}
            path={`Projects/China/src/${image}/`}
            sizes={`
              (min-width: 1233px) ${sizes.md}px,
              (min-width: 833px) ${sizes.sm}px,
              ${sizes.xs}px`}
          />
        </LightBox>
      )
    })
    let images = lightBoxContent.map((lightbox, index) => {
      let id = `image-${index}`
      return(
        <Card key={id} id={id}>
          {lightbox}
        </Card>
      )
    })
    this.setState({ images: images, lightBoxContent: lightBoxContent })
  }

  handleLightBoxClick(lightbox, index) {
    this.setState({
      currentLightBox: lightbox
    })
  }

  handleImageLoad() {
    this.loaded += 1
    if (this.loaded == data.images.length) {
      this.masonry.renderColumns()
    }
  }

  render() {
    return(
      <div className={styles.container}>
        <LightBoxGroup
          current={this.state.currentLightBox}
          contents={this.state.lightBoxContent}
        />
        <Masonry ref={(elem) => {this.masonry = elem}}>
          {this.state.images}
        </Masonry>
      </div>
    )
  }
}

export default China;