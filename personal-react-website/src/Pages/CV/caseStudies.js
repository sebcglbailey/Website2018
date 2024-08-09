import React from 'react';

import Card, { Cover, Info } from '../../Components/Card/';

import Slate from './src/clearscore-slate';

import './styles.scss';

const CaseStudies = () => {

  return (
    <div className='case-studies'>
      <Card>
        <Info header="ClearScore Design System">
          <Slate />
        </Info>
      </Card>
    </div>
  )
}

export default CaseStudies;