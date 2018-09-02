import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import postList from '../../../Blog/manifest.json';

postList.posts.reverse()

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      styles: this.props.styles
    }

    this.getPosts = this.getPosts.bind(this)
  }

  componentWillMount() {
    this.getPosts(this.props)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.current !== this.props.current) {

      this.getPosts(nextProps)

    }

  }

  getPosts(props) {

    let list = postList.posts.map((post, index) => {

      let postFile = require(`../../../Blog/posts/${post.postName}`)
      let frontMatter = postFile.frontMatter

      let postName = post.postName.split(".md")[0]

      if (postName !== props.current && index < 4) {
        return (
          <Link
            key={postName}
            className={props.styles.postLink}
            to={`/blog/${postName}`}
          >
            <div className={props.styles.postCard}>
              <h6 className={props.styles.date}>
                {frontMatter.date}
              </h6>
              <h2 className={props.styles.cardTitle}>
                {frontMatter.title}
              </h2>
              <p className={props.styles.cardDesc}>
                {frontMatter.description}
              </p>
              <p className={props.styles.link}>
                Read more
              </p>
            </div>
          </Link>
        )
      }

    })

    list.slice(0, 2)

    this.setState({
      postList: list,
      styles: props.styles
    })

  }

  render() {
    return (
      <div className={this.state.styles.list}>
        {this.state.postList}
      </div>
    )
  }
  
}

export default List;