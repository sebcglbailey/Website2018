import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

import postList from '../../Blog/manifest.json';

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.getPosts = this.getPosts.bind(this)
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Blog"

    this.getPosts()
  }

  getPosts() {

    let list = postList.posts.map((post) => {

      let postFile = require(`../../Blog/posts/${post.postName}`)
      let frontMatter = postFile.frontMatter

      let postName = post.postName.split(".md")[0]

      return (
        <Link
          key={postName}
          className={styles.postLink}
          to={`/blog/${postName}`}
        >
          <div className={styles.postCard}>
            <h2 className={styles.cardTitle}>
              {frontMatter.title}
            </h2>
            <p className={styles.cardDesc}>
              {frontMatter.description}
            </p>
            <p className={styles.link}>
              Read more
            </p>
          </div>
        </Link>
      )

    })

    this.setState({postList: list})

  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.postList}
      </div>
    )
  }
  
}

export default Blog;