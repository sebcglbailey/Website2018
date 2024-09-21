import React from 'react';

import Card, { Cover, Info } from '../../Components/Card/';

import Slate from '../CaseStudies/clearscore-slate';

import './styles.scss';

const CaseStudies = () => {
  let slateOverview = require('../CaseStudies/clearscore-slate/images/Slate_Overview.png');

  return (
    <div className='case-studies'>
      <h2 id="case-studies">Case Studies</h2>
      <Card
        link={'/resume/clearscore-design-system'}
      >
        <Info header="ClearScore Design System">
          <img src={slateOverview} />
        </Info>
      </Card>
    </div>
  )
}

export default CaseStudies;