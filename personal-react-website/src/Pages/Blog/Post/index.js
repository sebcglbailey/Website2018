import React, { Component } from 'react';

import List from '../List/';

import styles from './styles.css';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postName: this.props.postName
    }

    this.getPost = this.getPost.bind(this)
  }

  componentWillMount() {

    this.getPost(this.props.postName)

  }

  componentWillReceiveProps(nextProps) {

    if (this.props.postName !== nextProps.postName) {
      this.getPost(nextProps.postName)
    }

  }

  getPost(name) {

    let Post = require(`../../../Blog/posts/${name}.md`)

    document.title = `Sebastian Bailey | Blog | ${Post.frontMatter.title}`

    this.setState({
      post: (
        <Post.default />
      ),
      frontMatter: Post.frontMatter,
      postName: name
    })

  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.post}>
          <h6>{this.state.frontMatter.date}</h6>
          {/*<h6>{this.state.frontMatter.author}</h6>*/}
          <h1>{this.state.frontMatter.title}</h1>
          {this.state.post}
        </div>
        <List styles={styles} current={this.state.postName} />
      </div>
    )
  }
}

export default Post