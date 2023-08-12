import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.content
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.props.content) {
      this.setState({ content: nextProps.content })
    }
  }

  render() {
    let content = typeof (this.state.content) == "object" ? this.state.content.map((paragraph, index) => {
      return (
        <p
          key={`paragraph-${index}`}
          dangerouslySetInnerHTML={{ __html: paragraph }}>
        </p>
      )
    }) : typeof (this.state.content) == "string" ? (
      <p dangerouslySetInnerHTML={{ __html: this.state.content }}></p>
    ) : null
    return (content)
  }
}

export default Content