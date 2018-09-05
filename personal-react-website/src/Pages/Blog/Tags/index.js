import React, { Component } from 'react';

import Tag from './tag';

import styles from './styles.css';

class Tags extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postList: this.props.postList.posts
    }

    this.setTags = this.setTags.bind(this)
  }

  componentWillMount() {
    this.setTags()
  }

  setTags() {

    let keywords = []

    this.state.postList.forEach((post) => {

      if (!post.keywords) { return }

      post.keywords.forEach((keyword) => {

        if (keywords.includes(keyword)) { return }

        keywords.push(keyword)

      })

    })

    let tags = keywords.map((word) => {
      return (
        <Tag
          key={`tag-${word}`}
          id={word}
        />
      )
    })

    this.setState({ tags: tags })

  }

  render() {
    return(
      <div className={styles.container}>
        <ul className={styles.tagList}>
          {this.state.tags}
        </ul>
      </div>
    )
  }
}

export default Tags