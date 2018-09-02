import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom";

import Home from './Home';
import Post from './Post/';

import styles from './styles.css';

import postList from '../../Blog/manifest.json';

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Blog"
  }

  render() {
    return (
      <div>
        <Route exact path="/blog" component={Home} />
        <Route path="/blog/:id"
          render={({ match }) => <Post
            postName={match.params.id} />
          }
        />
      </div>
    )
  }
  
}

export default Blog;