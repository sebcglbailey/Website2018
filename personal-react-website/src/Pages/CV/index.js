import React, { Component } from 'react';

import InfoList from '../../Components/InfoList/';
import Card, {Cover, Info} from '../../Components/Card/';
import Masonry from '../../Components/Masonry/';
import Content from '../../Components/Content/';

import { H2 } from '../../Components/Headers/';
import ContentContainer from '../../Components/ContentContainer/';

import styles from './styles.css';

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
    document.title = "Résumé"
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
        <div className={styles.intro}>
          <Intro />
        </div>
        <div className={styles.fields}>
          <H2>Fields of work</H2>
          <InfoList types={this.state.fields} />
        </div>
        <div className={styles.skills}>
          <H2>Skills & Experience</H2>
          <h3>Software</h3>
          <InfoList types={this.state.skills.software} />
          <h3>Process</h3>
          <InfoList types={this.state.skills.process} />
          <h3>Development</h3>
          <InfoList types={this.state.skills.development} />
        </div>
        <Experience />
        <Education />
        <Hobbies />
      </ContentContainer>

    )
  }
  
}

export default Resume;