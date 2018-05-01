import React, { Component } from 'react';

class Contact extends Component {
  componentWillMount() {
    document.title = "Contact"
  }

  render() {
    return (
      <h1>Contact</h1>
    )
  }
  
}

export default Contact;