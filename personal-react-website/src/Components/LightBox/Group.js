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
  }

  componentDidMount() {
    this.container.addEventListener("click", this.close)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current) {
      let content = nextProps.current.props.children
      this.setState({
        visible: true,
        current: content
      })
    }
  }

  close(e) {
    if (e.target !== this.container) {
      return
    }
    this.setState({ visible: false, current: undefined })
  }

  render() {
    return (
      <div ref={(elem) => this.container = elem} className={this.state.visible ? styles.container : styles.hide}>
        <div className={styles.lightbox}>
          {this.state.current}
        </div>
      </div>
    )
  }
}

export default LightBoxGroup