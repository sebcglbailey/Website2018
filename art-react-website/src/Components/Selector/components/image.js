import React, { Component } from 'react'

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
          active: this.props.active,
        }

    }

    componentWillMount() {
    }

    render() {
        return (
          <img
            src={this.props.src}
            className={`${this.props.className} ${this.props.active ? 'active' : ''}`}
            onClick={this.props.onClick}
          />
        )
    }

}

export default Image;