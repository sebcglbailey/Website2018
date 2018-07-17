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
import intro from './intro';

import Education from './education';
import Experience from './work';

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
          <H2>Introduction</H2>
          <Content content={intro} />
        </div>
        <div className={styles.fields}>
          <H2>Fields of design</H2>
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
      </ContentContainer>

    )
  }
  
}

export default Resume;