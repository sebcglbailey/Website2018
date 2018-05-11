import React, { Component } from 'react';

import { breakpoints, masonrySizes } from '../../helpers/breakpoints';

import ProjectIntro from '../../Components/ProjectIntro/';
import ProjectImages from '../../Components/ProjectImages/';
import LightBox, { LightBoxGroup } from '../../Components/LightBox/';
import Image from '../../Components/Image/';

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
    let content = this.state.data.images.map((imgName, index) => {
      return(
        <LightBox
          key={`lightbox-${index}`}
          index={index}
          onClick={this.handleLightBoxClick}
        >
          <Image
            name={imgName}
            path={`Projects/LandseerSnowboards/src/${imgName}/`}
            sizes={masonrySizes}
          />
        </LightBox>
      )
    })
    let lightBoxContent = this.state.data.images.map((imgName, index) => {
      return(
        <Image
          key={`image-${index}`}
          index={index}
          name={imgName}
          path={`Projects/LandseerSnowboards/src/${imgName}/`}
        />
      )
    })
    this.setState({ lightBoxContent: lightBoxContent, content: content })
  }

  render() {
    return(
      <div>
        <LightBoxGroup
          current={this.state.currentLightBox}
          contents={this.state.lightBoxContent}
        />
        <ProjectImages
          content={this.state.content}
          project="LandseerSnowboards"
        />
      </div>
    )
  }
}

export default LandseerSnowboards;