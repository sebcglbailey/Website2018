import React, { Component } from 'react'

import Image from './components/image';

import './styles.scss';

class Selector extends Component {
    constructor(props) {
        super(props);

        this.state = {
          images: this.props.images,
          active: 0,
        }

        this.loadImages = this.loadImages.bind(this);
        this.setActive = this.setActive.bind(this);
    }

    componentWillMount() {

    }

    loadImages(imageArr) {
      this.imageSelector = imageArr.map((imgName, index) => {
        let img = require(`../../Pages/Art/src/images/${imgName}`)
        return (
          <Image
            key={imgName}
            src={img}
            className='selectorImage'
            index={index}
            onClick={() => {
              this.setActive(index)
            }}
            active={this.state.active === index}
          />
        )
      })
    }

    setActive(index) {
      this.setState({
        active: index
      })
    }

    render() {
      return (
        <div className="selectorContainer">
          {this.props.children}
        </div>
      )
    }

}

export default Selector;