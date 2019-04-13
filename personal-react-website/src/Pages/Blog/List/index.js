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

    } else if (nextProps.filters && nextProps.filters.length > 0) {

      this.getPosts(nextProps)

    } else if (nextProps.filters.length == 0) {

      this.getPosts(nextProps)

    }

  }

  getPosts(props) {

    let list = postList.posts;

    if (props.filters && props.filters.length > 0) {
      list = list.filter((post) => {

        if (post.keywords === null) { return }

        let includes = false

        props.filters.forEach((word) => {
          if (post.keywords.includes(word)) {
            includes = true
          }
        })

        return includes

      })
    }

    list = list.map((post, index) => {

      if (!post.postName) { return }

      let postName = post.postName.split(".md")[0]

      let max = props.current ? 4 : props.max !== undefined ? props.max : 8

      if (postName !== props.current && index < max) {
        return (
          <Link
            key={postName}
            className={props.styles.postLink}
            to={`/blog/${postName}`}
          >
            <div className={props.styles.postCard}>
              <h6 className={props.styles.date}>
                {post.date}
              </h6>
              <h2 className={props.styles.cardTitle}>
                {post.title}
              </h2>
              <p className={props.styles.cardDesc}>
                {post.description}
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