import React, {Component} from 'react';

import styles from './styles.css';

class Cover extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: this.props.image
    }

    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if (this.state.image !== nextState.image) {
      this.setState({ image: nextState.image })
    }
  }

  handleImageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    return(
      <div className={styles.cover}>
        <img onLoad={this.handleImageLoad} src={this.state.image} />
      </div>
    )
  }
}

export default Cover