import React, { Component } from 'react';

import './styles.scss';

class SplashLogo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: this.props.ready,
      containerClass: 'logoContainer',
      containerStyle: {}
    }

    this.setupLogo = this.setupLogo.bind(this)
    this.animateLogo = this.animateLogo.bind(this)
    this.handleInteraction = this.handleInteraction.bind(this)
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleInteraction)
  }

  componentDidMount() {
    this.setupLogo()
    window.addEventListener("click", this.handleInteraction)

    setTimeout(() => {
      this.setState({ ready: true })
    }, this.props.delay * 3)
  }

  componentWillReceiveProps(nextState) {
    if (nextState.ready) {
      this.animateLogo()
    }
  }

  componentDidUpdate() {
    if (this.state.ready) {
      this.animateLogo()
    }
  }

  handleInteraction() {
    if (this.state.containerClass == 'logoContainer') {
      this.setState({
        containerClass: `logoContainer hide`,
        containerStyle: { transition: `opacity ${this.props.delay}ms ease-in-out` }
      })
      setTimeout(() => {
        this.setState({ containerStyle: { display: "none" } })
      }, this.props.delay)
    }
  }

  setupLogo() {

    let length = this.path.getTotalLength();
    // Set up the starting positions
    this.path.style.strokeDasharray = `${length} ${length}`
    this.path.style.strokeDashoffset = `${length}`
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();
    // Define our transition
    this.path.style.transition = this.path.style.WebkitTransition = 'stroke-dashoffset 1.5s cubic-bezier(0.8,0.4,0.4,1)';

  }

  animateLogo() {
    setTimeout(() => {
      this.path.style.strokeDashoffset = '0';
    }, this.props.delay)
  }

  render() {
    return (
      <div
        ref={(elem) => this.elem = elem}
        className={this.state.containerClass}
        style={this.state.containerStyle}>
        <svg
          className='svg'
          version="1.1"
          id="splash-logo"
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px"
          viewBox="0 0 1021.74 1021.74"
          enableBackground="new 0 0 1021.74 1021.74">
          <path
            ref={(path) => this.path = path}
            className='path'
            fill="none"
            stroke="#fff"
            strokeWidth="40"
            strokeLinecap="round"
            d="M109.947,962.986
          c65.521-9.742,127.066-45.34,168.06-103.885C357.203,746,331.005,616.065,216.613,510.92S83.5,275.84,162.695,162.738
          c17.231-24.608,38.095-45.16,61.358-61.445c88.491-61.963,203.175-58.613,286.824-0.051
          c23.263,16.285,44.127,36.837,61.358,61.445c79.194,113.102,51.694,252.286-53.918,348.182
          c-105.612,95.896-140.59,235.08-61.394,348.182c40.993,58.545,102.538,94.143,168.06,103.885
          c61.074,9.097,125.608-4.271,180.182-42.483c113.101-79.193,140.589-235.08,61.394-348.182
          c-42.12-60.154-105.935-96.081-173.468-104.624"></path>
        </svg>
      </div>
    )
  }
}

export default SplashLogo