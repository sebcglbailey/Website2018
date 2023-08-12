import React, { Component } from 'react';

import './styles.scss';

const Container = (props) => {
  return (
    <div className='contentContainer'>{props.children}</div>
  )
}

export default Container