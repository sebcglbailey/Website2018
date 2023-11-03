import React, { Component, Fragment } from 'react';

import {H1} from '../Headers';

import logo from "../../logo-white-art.svg";
import logoPNG from "../../logo-white-art.png";

import images from "../../Pages/Art/src/images";

import './styles.scss';

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
          size: props.size
        }

        this.getBackground = this.getBackground.bind(this)
    }

    componentWillMount() {
      this.getBackground(this.props.background)
    }

    getBackground(image) {
      let img = null

      if (images[image] && images[image].imgHero) {
        img = require(`../../Pages/Art/src/images/${image}/${images[image].imgHero}`);
      } else {
        img = null
      }

      this.setState({
        backgroundImage: img,
      })
    }

    render() {
        return (
          <div
            className={`heroContainer ${this.state.size == "SMALL" ? "smallContainer" : ""}`}
            style={{
              backgroundImage: this.state.backgroundImage ? `url(${this.state.backgroundImage})` : 'transparent',
            }}
          >
            {!this.props.children ? (
              <Fragment>
                <div className='logo'>
                  <picture>
                    <source srcSet={logo} />
                    <img src={logoPNG} alt='Sebastian Bailey Logo' />
                  </picture>
                </div>
                {this.state.size !== "SMALL" ? (
                  <H1>Seb Bailey Art</H1>
                ) : null}
              </Fragment>
            ) : (
              this.props.children
            )}
          </div>
        )
    }

}

export default Hero;