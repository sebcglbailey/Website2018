import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './LandseerSnowboards.css';

const LandseerSnowboards = ({ match }) => {
  return (
    <Project styles={styles} path={match.url} />
  )
}

export default LandseerSnowboards;