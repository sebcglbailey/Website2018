import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './China.css';

const China = ({ match }) => {
  return (
    <Project styles={styles} path={match.url} />
  )
}

export default China;