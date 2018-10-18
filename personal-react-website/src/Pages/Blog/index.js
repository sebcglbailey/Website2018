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
        <Switch>
          <Route path="/blog/:id"
            render={({ match }) => {
                let post = postList.posts.filter((post) => {
                  return post.postName.replace(".md", "") === match.params.id
                })
                if (post.length > 0) {
                  return <Post postName={match.params.id} />
                } else {
                  return <Redirect from="/blog/:id" to="/blog" />
                }
              }
            }
          />
          <Route exact path="/blog" component={Home} />
        </Switch>
      </div>
    )
  }
  
}

export default Blog;