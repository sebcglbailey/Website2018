import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List/';

import styles from './styles.css';

import postList from '../../Blog/manifest.json';

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Blog"
  }

  render() {
    return (
      <List styles={styles} />
    )
  }
  
}

export default Blog;