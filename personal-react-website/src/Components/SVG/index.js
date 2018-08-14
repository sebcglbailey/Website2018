import React, { Component } from 'react';

import svgs from './svgs';

class SVG extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let svg = svgs[this.props.id]
    let width = this.props.width
    let height = this.props.height

    let widthRatio = width/32
    let heightRatio = height/32

    let viewBox = `0 0 ${32/widthRatio} ${32/heightRatio}`

    return(
      <svg className={this.props.className} width={width} height={height} viewBox={viewBox}>
        {svg}
      </svg>
    )
  }

}

export default SVG