import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List/';
import Tags from './Tags/';

import styles from './styles.css';

import postList from '../../Blog/manifest.json';

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: []
    }

    this.handleFilter = this.handleFilter.bind(this)
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Blog"
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
    return (
      <div>
        <Tags
          postList={postList}
          filterResults={this.handleFilter}
        />
        <List
          styles={styles}
          filters={this.state.filters}
        />
      </div>
    )
  }
  
}

export default Blog;