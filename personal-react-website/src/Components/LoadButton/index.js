import React, { Component } from 'react';

import './styles.scss';

class LoadButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='buttonContainer'>
        <button onClick={this.props.onClick} className='loadMore'>Load More...</button>
      </div>
    )
  }
}

export default LoadButton;