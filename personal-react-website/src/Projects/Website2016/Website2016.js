import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './Website2016.css';

const Website2016 = ({ match }) => {
  return (
    <Project styles={styles} path={match.url} />
  )
}

export default Website2016;