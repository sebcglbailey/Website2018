import React, { Component } from 'react';

class About extends Component {
  componentWillMount() {
    document.title = "About"
  }

  render() {
    return (
      <h1>About</h1>
    )
  }
  
}

export default About;