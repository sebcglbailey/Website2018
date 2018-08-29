import React, { Component } from 'react';

import svgs from './svgs';

class SVG extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let svg = svgs[this.props.id]

    return(
      <svg className={this.props.className} width={32} height={32} viewBox="0 0 32 32" style={{width: this.props.width, height: this.props.height}}>
        {svg}
      </svg>
    )
  }

}

export default SVG