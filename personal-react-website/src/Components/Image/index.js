import React, { Component } from 'react';

const {sizes} = require('../../helpers/imgSizes');

class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: this.props.path,
      name: this.props.name
    }

    this.setSrcSet = this.setSrcSet.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.path !== this.props.path) {
      this.setState({ path: nextProps.path, name: nextProps.name })
    }
  }

  handleImageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  setSrcSet() {

    let images = [
      {
        image: require(`../../${this.state.path}xl.${this.state.name.split(".")[1]}`),
        size: sizes.xl
      },
      {
        image: require(`../../${this.state.path}lg.${this.state.name.split(".")[1]}`),
        size: sizes.lg
      },
      {
        image: require(`../../${this.state.path}md.${this.state.name.split(".")[1]}`),
        size: sizes.md
      },
      {
        image: require(`../../${this.state.path}sm.${this.state.name.split(".")[1]}`),
        size: sizes.sm
      },
      {
        image: require(`../../${this.state.path}xs.${this.state.name.split(".")[1]}`),
        size: sizes.xs
      }
    ]

    let srcSetArr = images.map((obj) => {
      return `${obj.image} ${obj.size}w, `
    })
    let srcSet = srcSetArr.join()
    let src = images[4].image

    return {srcSet: srcSet, src: src}
  }

  render() {
    let {srcSet, src} = this.setSrcSet()
    return (
      <img
        className={this.props.className}
        src={src}
        srcSet={srcSet}
        sizes={this.props.sizes}
        onLoad={this.handleImageLoad}
      />
    )
  }
}

export default Image