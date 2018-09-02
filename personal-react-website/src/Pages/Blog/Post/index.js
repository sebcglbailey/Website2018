import React, { Component } from 'react';

import styles from './styles.css';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.getPost = this.getPost.bind(this)
  }

  componentWillMount() {

    this.getPost(this.props.postName)

  }

  getPost(name) {

    let Post = require(`../../../Blog/posts/${name}.md`)

    this.setState({
      post: (
        <Post.default />
      ),
      frontMatter: Post.frontMatter
    })

  }

  render() {
    return (
      <div className={styles.container}>
        <h6>{this.state.frontMatter.date}</h6>
        <h6>{this.state.frontMatter.author}</h6>
        <h1>{this.state.frontMatter.title}</h1>
        {this.state.post}
        }
      </div>
    )
  }
}

export default Post