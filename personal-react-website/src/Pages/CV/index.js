import React, { Component } from 'react';

class Work extends Component {
  componentWillMount() {
    document.title = "Work"
  }

  render() {
    return (
      <h1>CV</h1>
    )
  }
  
}

export default Work;