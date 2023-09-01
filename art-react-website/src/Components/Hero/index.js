import React, { Component } from 'react';

import {H1} from '../Headers';

import logo from "../../logo-white-art.svg";
import logoPNG from "../../logo-white-art.png";

import images from "../../Pages/Art/src/images";

import './styles.scss';

class Hero extends Component {
    constructor(props) {
        super(props);

        this.getBackground = this.getBackground.bind(this)
    }

    componentWillMount() {
      this.getBackground(this.props.background)
    }

    getBackground(image) {
      let img = require(`../../Pages/Art/src/images/${image}/${images[image].imgLarge[0]}`);

      this.setState({
        backgroundImage: img,
      })
    }

    render() {
        return (
          <div
            className='heroContainer'
            style={{
              backgroundImage: this.state.backgroundImage ? `url(${this.state.backgroundImage})` : 'transparent',
            }}
          >
            <div className='logo'>
              <picture>
                <source srcSet={logo} />
                <img src={logoPNG} alt='Sebastian Bailey Logo' />
              </picture>
            </div>
            <H1>Seb Bailey Art</H1>
          </div>
        )
    }

}

export default Hero;