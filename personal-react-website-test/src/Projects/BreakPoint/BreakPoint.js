import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './BreakPoint.css';

const BreakPoint = ({ match }) => {
  return (
    <Project styles={styles} path={match.url} />
  )
}

export default BreakPoint;