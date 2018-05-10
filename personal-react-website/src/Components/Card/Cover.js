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

    this.sizes = "(min-width: 2436px) 16vw, (min-width: 2036px) 20vw, (min-width: 1636px) 25vw, (min-width: 1236px) 33vw, (min-width: 836px) 50vw, 33vw"
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
          sizes={this.sizes}
        />
      </div>
    )
  }
}

export default Cover