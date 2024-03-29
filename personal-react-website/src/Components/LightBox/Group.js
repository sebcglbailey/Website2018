import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

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

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyTap)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current) {
      let content = nextProps.current
      this.setState({
        visible: true,
        current: nextProps.current
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

      if (this.props.onClose) {
        this.props.onClose()
      }
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
    let index = this.state.current.props.index

    if (index < this.props.contents.length - 1) {
      index += 1
    } else {
      index = 0
    }
    let next = this.props.contents[index]
    this.setState({
      current: next
    })
  }

  prev() {
    let index = this.state.current.props.index

    if (index > 0) {
      index -= 1
    } else {
      index = this.props.contents.length - 1
    }
    let prev = this.props.contents[index]
    this.setState({
      current: prev
    })
  }

  render() {
    return (
      <div ref={(elem) => this.container = elem} className={this.state.visible ? 'lightboxContainer' : 'hide'}>
        <div ref={(elem) => this.interactionContainer = elem} className='interaction'>
          <div
            ref={(elem) => this.prevButton = elem}
            className='arrow prev'
          >
          </div>
          <div
            ref={(elem) => this.nextButton = elem}
            className='arrow next'
          >
          </div>
        </div>
        <div ref={(elem) => this.flexContainer = elem} className='flexContainer'>
          <div className='lightbox'>
            {this.state.current}
            <div
              ref={(elem) => this.closeButton = elem}
              className='close'
            >
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LightBoxGroup