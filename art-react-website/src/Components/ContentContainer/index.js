import React, { Component } from 'react';

import styles from './styles.css';

const Container = (props) => {
  return(
    <div className={styles.container}>{props.children}</div>
  )
}

export default Container