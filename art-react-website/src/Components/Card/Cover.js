import React, {Component} from 'react';

import Image from '../Image/';

import styles from './styles.css';

class Cover extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: this.props.image,
      project: this.props.project
    }

    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.project !== nextProps.project) {
      this.setState({ image: nextProps.image, project: nextProps.project })
    }
  }

  handleImageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    return(
      <div ref={(elem) => this.cover = elem} className={styles.cover}>
        <Image
          name="cover.jpg"
          path={`Projects/${this.state.project}/src/cover.jpg/`}
          onLoad={this.handleImageLoad}
          sizes={this.props.sizes}
        />
      </div>
    )
  }
}

export default Cover