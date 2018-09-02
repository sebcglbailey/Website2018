import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Card from '../../Components/Card/';

import styles from './styles.css';

class InstaPic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      imageUrl: (
        this.props.index == 0
        || this.props.index == 1
        || this.props.index == 6
        || this.props.index == 12
        || this.props.index == 17
      ) ? this.props.data.images.standard_resolution.url 
        : this.props.data.images.low_resolution.url,
    }

  }

  render() {

    let image = this.state.data

    return(
      <li
        ref={(elem) => {this.item = elem}}
        className={styles.instaListItem}
      >
        <Link
          to={image.link}
          target="_blank"
        >
          <img
            src={this.state.imageUrl}
            alt={image.caption.text}
          />
        </Link>
      </li>
    )
  }
}

class Instagram extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.renderImages = this.renderImages.bind(this)
    this.setRowHeight = this.setRowHeight.bind(this)
  }

  componentDidMount() {
    fetch("https://api.instagram.com/v1/users/3197786970/media/recent/?access_token=3197786970.da8a7fe.74849f11e08a4e34944d956de321cd53")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({data: data.data})
        this.setRowHeight(data.data)
      })

    window.addEventListener("resize", this.setRowHeight)
  }

  setRowHeight(data) {

    let imgData = data && data.map ? data : this.state.data ? this.state.data : null
    this.renderImages(imgData)

    let ratio = 0.2, amount = 5, noOfRows = 9;

    if (window.outerWidth <= 400) {
      ratio = 0.333333333
      amount = 3
      noOfRows = 12
    }

    let listWidth = this.list.offsetWidth
    let columnWidth = listWidth * ratio
    let rowHeight = columnWidth

    this.setState({
      listStyle: {
        gridTemplateRows: `repeat(${noOfRows}, ${rowHeight}px)`,
      }
    })
  }

  renderImages(data) {
    let max;
    if (window.outerWidth <= 400) {
      max = 19
    } else {
      max = 20
    }

    let list = data.map((image, index) => {

      if (index < max) {
        return(
          <InstaPic
            key={image.id}
            data={image}
            index={index}
          />
        )
      } else return

    })

    this.setState({
      list: list,
    })

  }

  render() {
    return(
      <div className={styles.instaContainer}>
        <Link target="_blank" to="http://www.instagram.com/user?userid=3197786970">
          <h3>@seb.bailey</h3>
        </Link>
        <ul
          ref={(elem) => {this.list = elem}}
          className={styles.instaList}
          style={this.state.listStyle}
        >
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