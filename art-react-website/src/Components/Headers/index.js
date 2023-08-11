import React, { Component } from 'react';

import styles from './styles.scss';

export const H1 = (props) => {
  return(
    <h1 className='h1'>{props.children}</h1>
  )
}

export const H2 = (props) => {
  return(
    <h2 className='h2'>{props.children}</h2>
  )
}

export const H3 = (props) => {
  return(
    <h3 className='h3'>{props.children}</h3>
  )
}
