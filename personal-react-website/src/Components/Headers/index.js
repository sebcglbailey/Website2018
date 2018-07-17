import React, { Component } from 'react';

import styles from './styles.css';

export const H1 = (props) => {
  return(
    <h1 className={styles.h1}>{props.children}</h1>
  )
}

export const H2 = (props) => {
  return(
    <h2 className={styles.h2}>{props.children}</h2>
  )
}

export const H3 = (props) => {
  return(
    <h3 className={styles.h3}>{props.children}</h3>
  )
}
