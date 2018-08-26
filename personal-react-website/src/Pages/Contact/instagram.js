import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

class InstaPic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      class: styles.instaListItem,
      imageUrl: this.props.data.images.low_resolution.url
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

    if (this.state.class == styles.instaListItem) {
      this.setState({
        class: `${styles.instaListItem} ${styles.current}`,
        imageUrl: this.state.data.images.standard_resolution.url
      })
    } else {
      this.setState({
        class: styles.instaListItem
      })
    }

  }

  render() {

    let image = this.state.data

    return(
      <li
        className={this.state.class}
        onClick={this.handleClick}
      >
        <img
          src={this.state.imageUrl}
          alt={image.caption.text}
        />
      </li>
    )
  }
}

class Instagram extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.renderImages = this.renderImages.bind(this)
    this.switchImage = this.switchImage.bind(this)
  }

  componentDidMount() {
    fetch("https://api.instagram.com/v1/users/3197786970/media/recent/?access_token=3197786970.da8a7fe.74849f11e08a4e34944d956de321cd53")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.renderImages(data.data)
      })
  }

  renderImages(data) {

    let list = data.map((image) => {

      return(
        <InstaPic
          key={image.id}
          data={image}
        />
      )

    })

    this.setState({ list: list })

  }

  switchImage(data) {

    console.log(data)

  }

  render() {
    return(
      <div className={styles.instaContainer}>
        <Link target="_blank" to="http://www.instagram.com/user?userid=3197786970">
          <h3>@seb.bailey</h3>
        </Link>
        <ul className={styles.instaList}>
          {this.state.list}
        </ul>
        <div className={styles.instaCurrent}>
          {this.state.current}
        </div>
      </div>
    )
  }
}

export default Instagram