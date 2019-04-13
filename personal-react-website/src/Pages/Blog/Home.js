import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoadButton from '../../Components/LoadButton/';

import List from './List/';
import Tags from './Tags/';

import styles from './styles.css';

import postList from '../../Blog/manifest.json';

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: [],
      max: 8
    }

    this.handleFilter = this.handleFilter.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Blog"
  }

  handleLoadMore() {
    let max = this.state.max

    max += 8

    this.setState({max: max})
  }

  handleFilter(keyword, selected) {

    let filters;

    if (!selected && this.state.filters.includes(keyword)) {

      filters = this.state.filters
      filters.splice(this.state.filters.indexOf(keyword), 1)

    } else {

      filters = this.state.filters
      filters.push(keyword)

    }

    this.setState({ filters: filters })

  }

  render() {

    let loadMoreButton = postList && postList.posts && this.state.max < postList.posts.length ? 
      (
        <div className={styles.load}>
          <LoadButton onClick={this.handleLoadMore} />
        </div>
      ) : null

    return (
      <div className={styles.homeContainer}>
        <Tags
          postList={postList}
          filterResults={this.handleFilter}
        />
        <List
          styles={styles}
          filters={this.state.filters}
          max={this.state.max}
        />
        {loadMoreButton}
      </div>
    )
  }
  
}

export default Blog;