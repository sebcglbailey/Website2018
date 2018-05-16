import React, { Component } from 'react';

import Card, {Info} from '../../Components/Card/';
import Image from '../../Components/Image/';

import images from './list';

import {masonrySizes} from '../../helpers/breakpoints';
import styles from './styles.css';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: 0
    }

    this.renderCards = this.renderCards.bind(this)
    this.renderImages = this.renderImages.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
    this.setCoverSize = this.setCoverSize.bind(this)
    this.windowResize = this.windowResize.bind(this)
  }

  componentWillMount() {
    document.title = "Extras"

    let imageNames = []
    images.map((type, index) => {
      let length = Object.keys(type.images).length
      let randomIn = Math.floor(Math.random() * length)
      let randomImg = Object.keys(type.images).filter((key, i) => {
        if (i == randomIn) {
          return key
        }
      })[0]
      imageNames.push(randomImg)
    })

    this.setState({ imageNames: imageNames })

  }

  componentDidMount() {
    this.renderImages()
    this.setCoverSize()
    window.addEventListener("resize", this.windowResize)
  }

  windowResize() {
    this.setCoverSize()
  }

  setCoverSize() {
    this.covers.map((cover) => {
      if (cover) {
        let width = cover.parentNode.offsetWidth * 0.4
        cover.setAttribute('style', `width: 40%; height: ${width}px;`)
      }
    })
  }

  renderImages() {
    let imgArr = images.map((type, index) => {
      let randomImg = this.state.imageNames && this.state.imageNames[index] ? this.state.imageNames[index] : null
      let cover = this.covers[index]
      let cardWidth = cover.parentNode.offsetWidth
      let imgSize = cardWidth * 0.4
      if (randomImg) {
        let image = (
          <Image
            key={type.type}
            name={randomImg}
            path={`Pages/Extras/src/${type.type}/${randomImg}/`}
            onLoad={this.handleImageLoad}
            cover
          />
        )

        return image
      } else {
        return
      }
    })

    this.setState({ images: imgArr })
  }

  renderCards() {
    let cards = []
    this.covers = []
    images.map((type, index) => {
      let image = this.state.images && this.state.images[index] ? this.state.images[index] : null
      let cover;
      let card = (
        <Card landscape
          key={`type-${type.type}`}
          id={`type-${type.type}`}
        >
          <div
            ref={(elem) => this.covers.push(elem)}
            className={styles.cover}
          >
            {image}
          </div>
          <Info landscape hasCover={this.state.coversLoaded}>
            {type.title}
          </Info>
        </Card>
      )
      cards.push(card)
    })

    return cards
  }

  handleImageLoad() {
    if (this.state.loaded == images.length - 1) {
      this.setState({
        coversLoaded: true
      })
    } else {
      this.setState({ loaded: this.state.loaded + 1 })
    }
  }

  render() {
    let cards = this.renderCards()
    return (
      <div className={styles.container}>
        {cards}
      </div>
    )
  }
  
}

export default About;