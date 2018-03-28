import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './PalringoWebUI.css';

const PalringoWebUI = ({ match }) => {
  return (
    <Project styles={styles} path={match.url} />
  )
}

export default PalringoWebUI;