import React, { Component } from 'react';

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
    let lightBoxContent = this.state.data.images.map((imgName, index) => {
      return(
        <LightBox
          key={`lightbox-${index}`}
          index={index}
          onClick={this.handleLightBoxClick}
        >
          <Image
            name={imgName}
            path={`Projects/LandseerSnowboards/src/${imgName}/`}
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