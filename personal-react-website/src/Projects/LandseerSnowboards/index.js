import React, { Component } from 'react';

import {sizes} from '../js/imgSizes';

import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages/';
import LightBox, { LightBoxGroup } from '../../Components/LightBox/';

import styles from './styles.css';

class LandseerSnowboards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      manifest: require(`./manifest`),
      data: require(`./data.json`)
    }

    this.getLightboxImages = this.getLightboxImages.bind(this)
    this.handleLightBoxClick = this.handleLightBoxClick.bind(this)
  }

  componentWillMount() {
    this.getLightboxImages()
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.manifest !== this.state.manifest) {
      this.getLightboxImages()
    }
  }

  handleLightBoxClick(lightbox, index) {
    this.setState({
      currentLightBox: lightbox
    })
  }

  getLightboxImages() {
    let lightBoxContent = this.state.data.images.map((imgName, index) => {
      // let src = require(`./img/${image}`)

      let images = [
        {
          image: require(`./src/${imgName}/xl.${imgName.split(".")[1]}`),
          size: sizes.xl
        },
        {
          image: require(`./src/${imgName}/lg.${imgName.split(".")[1]}`),
          size: sizes.lg
        },
        {
          image: require(`./src/${imgName}/md.${imgName.split(".")[1]}`),
          size: sizes.md
        },
        {
          image: require(`./src/${imgName}/sm.${imgName.split(".")[1]}`),
          size: sizes.sm
        },
        {
          image: require(`./src/${imgName}/xs.${imgName.split(".")[1]}`),
          size: sizes.xs
        },
      ]

      let srcSetArr = images.map((obj) => {
        return `${obj.image} ${obj.size}w, `
      })
      let srcSet = srcSetArr.join()
      let imgSrc = images[4].image

      return(
        <LightBox
          key={`lightbox-${index}`}
          index={index}
          onClick={this.handleLightBoxClick}
        >
          <img
            src={imgSrc}
            srcSet={srcSet}
            onLoad={this.handleImageLoad}
          />
        </LightBox>
      )
    })
    this.setState({ lightBoxContent: lightBoxContent})
  }

  render() {
    return(
      <div>
        <LightBoxGroup
          current={this.state.currentLightBox}
          contents={this.state.lightBoxContent}
        />
        <ProjectImages
          content={this.state.lightBoxContent}
          project="LandseerSnowboards"
        />
      </div>
    )
  }
}

export default LandseerSnowboards;