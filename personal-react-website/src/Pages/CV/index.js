import React, { Component } from 'react';

import InfoList from '../../Components/InfoList/';

import { H2 } from '../../Components/Headers/';
import ContentContainer from '../../Components/ContentContainer/';

import './styles.scss';

import fields from './fields';
import skills from './skills';
import work from './work';
import intro from './introContent';

import Intro from './intro';
import Education from './education';
import Experience from './work';
import Hobbies from './hobbies';

class Resume extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: fields,
      skills: skills,
      work: work
    }

    this.handlePageLoad = this.handlePageLoad.bind(this)
  }

  componentWillMount() {
    document.title = "Sebastian Bailey | Résumé"
    this.handlePageLoad()
  }

  handlePageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    return (
      <ContentContainer>
        <div className='intro'>
          <Intro />
        </div>
        <div className='introContent'>
          {
            intro.map(line => {
              return(
                <p>{line}</p>
                )
            })
          }
        </div>
        <H2>My experience...</H2>
        <Experience />
        <div className='skills'>
          <h3>Software</h3>
          <InfoList types={this.state.skills.software} />
          <h3>Development</h3>
          <InfoList types={this.state.skills.development} />
        </div>
        <Education />
        <Hobbies />
      </ContentContainer>

    )
  }

}

export default Resume;