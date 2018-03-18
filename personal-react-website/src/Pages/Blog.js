import React, { Component } from 'react';

class Blog extends Component {
  componentWillMount() {
    document.title = "Blog"
  }

  render() {
    return (
      <h1>Blog</h1>
    )
  }
  
}

export default Blog;