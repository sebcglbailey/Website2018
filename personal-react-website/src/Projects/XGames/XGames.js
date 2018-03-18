import React, { Component } from 'react';
import Project from '../../Components/Project/Project';

import styles from './XGames.css';

const XGames = ({ match }) => {
    return (
      <Project styles={styles} path={match.url} />
    )
}

export default XGames;