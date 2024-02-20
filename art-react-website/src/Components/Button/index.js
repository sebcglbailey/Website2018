import React, { Component } from 'react'

import './styles.scss';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
          size: this.props.size ? this.props.size : 'LARGE',
          variant: this.props.variant ? this.props.variant : 'PRIMARY'
        }
    }

    componentWillMount() {
      if (this.state.size == 'LARGE') {
        this.setState({
          className: 'contact-large'
        })
      } else if (this.state.size == 'SMALL') {
        this.setState({
          className: 'contact-small'
        })
      }
    }

    render() {
        return (
          <a
              className={`contact ${this.state.className} ${this.props.className ? this.props.className : ""} ${this.state.variant}`}
              href={this.props.href}
              target={this.props.target}
          >
              {this.props.children}
          </a>
        )
    }

}

export default Button;