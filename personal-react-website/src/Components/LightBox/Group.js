import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';

class LightBoxGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.close = this.close.bind(this)
    this.keyTap = this.keyTap.bind(this)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  componentDidMount() {
    this.container.addEventListener("click", this.close)
    window.addEventListener("keydown", this.keyTap)
    this.nextButton.addEventListener("click", this.next)
    this.prevButton.addEventListener("click", this.prev)
    this.closeButton.addEventListener("click", this.close)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current) {
      let content = nextProps.current.props.children
      this.setState({
        visible: true,
        current: content,
        currentLightbox: nextProps.current
      })
    }
  }

  close(event) {
    if ((event &&
        (event.target == this.container
          || event.target == this.flexContainer
          || event.target == this.interactionContainer
          || event.target == this.closeButton)
      ) || !event) {
      this.setState({ visible: false, current: undefined })
    }
  }

  keyTap(event) {
    if (event.keyCode == 39) {
      this.next()
    } else if (event.keyCode == 37) {
      this.prev()
    } else if (event.keyCode == 27) {
      this.close()
    }
  }

  next() {
    let index = this.state.currentLightbox.props.index

    if (index < this.props.contents.length - 1) {
      index += 1
    } else {
      index = 0
    }
    let next = this.props.contents[index].props.children
    this.setState({
      current: next,
      currentLightbox: this.props.contents[index]
    })
  }

  prev() {
    let index = this.state.currentLightbox.props.index

    if (index > 0) {
      index -= 1
    } else {
      index = this.props.contents.length - 1
    }
    let prev = this.props.contents[index].props.children
    this.setState({
      current: prev,
      currentLightbox: this.props.contents[index]
    })
  }

  render() {
    return (
      <div ref={(elem) => this.container = elem} className={this.state.visible ? styles.container : styles.hide}>
        <div ref={(elem) => this.interactionContainer = elem} className={styles.interaction}>
          <div
            ref={(elem) => this.prevButton = elem}
            className={`${styles.arrow} ${styles.prev}`}
          >
          </div>
          <div
            ref={(elem) => this.nextButton = elem}
            className={`${styles.arrow} ${styles.next}`}
          >
          </div>
        </div>
        <div ref={(elem) => this.flexContainer = elem} className={styles.flexContainer}>
          <div className={styles.lightbox}>
            {this.state.current}
            <div
              ref={(elem) => this.closeButton = elem}
              className={styles.close}
            >
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LightBoxGroup