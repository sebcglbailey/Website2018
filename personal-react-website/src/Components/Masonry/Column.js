import React, { Component } from 'react';

class Column extends Component {
  constructor(props) {
    super(props)

    this.state = {
      children: this.props.children
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children != this.props.children) {
      this.setState({ children: nextProps.children })
    }
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.state.children}
      </div>
    )
  }
}

export default Column