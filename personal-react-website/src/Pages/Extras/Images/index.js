import React, { Component } from 'react';

import Masonry from '../../../Components/Masonry/';
import Card from '../../../Components/Card/';
import Image from '../../../Components/Image/';
import LightBox, { LightBoxGroup } from '../../../Components/LightBox/'

import list from '../list';

import {masonrySizes} from '../../../helpers/breakpoints';
import styles from './styles.css';

class Images extends Component {
  constructor(props) {
    super(props)

    let extra = list.filter((obj) => {
      return obj.type == this.props.id
    })[0]

    this.state = {
      images: extra ? extra.images : null
    }

    this.loaded = 0

    this.getImages = this.getImages.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
    this.handleLightBoxClick = this.handleLightBoxClick.bind(this)

  }

  componentWillMount() {
    this.getImages()
  }

  getImages() {

    let content = this.state.images.map((imgName, index) => {
      let imagePath = `Pages/Extras/src/${this.props.id}/${imgName}/`
      return(
        <LightBox
          key={`lightbox-${index}`}
          index={index}
          onClick={this.handleLightBoxClick}
        >
          <Image
            name={imgName}
            path={imagePath}
            sizes={masonrySizes}
            onLoad={this.handleImageLoad}
            className={styles.image}
          />
        </LightBox>
      )
    })

    let lightBoxContent = this.state.images.map((imgName, index) => {
      let imagePath = `Pages/Extras/src/${this.props.id}/${imgName}/`
      return(
        <Image
          key={`image-${index}`}
          index={index}
          name={imgName}
          path={imagePath}
        />
      )
    })

    let cards = content.map((lightbox, index) => {
      return(
        <Card
          key={`card-${index}`}
          id={`card-${index}`}
        >
          {lightbox}
        </Card>
      )
    })
    this.setState({ cards: cards, lightBoxContent: lightBoxContent })
  }

  handleImageLoad() {
    this.loaded += 1
    if (this.state.images && this.loaded == this.state.images.length - 1) {
      this.setState({ masonryContentsLoaded: true })
      this.masonry.renderColumns()
      if (this.props.onLoad) {
        this.props.onLoad()
      }
    }
  }

  handleLightBoxClick(lightbox, index) {
    this.setState({
      currentLightBox: this.state.lightBoxContent[index]
    })
  }

  render() {
    return(
      <div className={styles.container}>
        <LightBoxGroup
          current={this.state.currentLightBox}
          contents={this.state.lightBoxContent}
        />
        <Masonry
          ref={(elem) => this.masonry = elem}
          minWidth={400}
          margin={16}
          loaded={this.state.masonryContentsLoaded}
        >
          {this.state.cards}
        </Masonry>
      </div>
    )
  }
}

export default Images