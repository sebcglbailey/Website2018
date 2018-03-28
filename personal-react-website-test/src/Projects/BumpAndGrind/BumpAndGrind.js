import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './BumpAndGrind.css';

const BumpAndGrind = ({ match }) => {
  return (
    <Project styles={styles} path={match.url} />
  )
}

export default BumpAndGrind;