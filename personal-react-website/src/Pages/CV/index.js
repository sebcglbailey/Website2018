import React, { Component } from 'react';

import InfoList from '../../Components/InfoList/';
import Card, {Cover, Info} from '../../Components/Card/';
import Masonry from '../../Components/Masonry/';
import Content from '../../Components/Content/';

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
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>Introduction</h2>
          <Content content={intro} />
        </div>
        <div className={styles.fields}>
          <h2>Fields of design</h2>
          <InfoList types={this.state.fields} />
        </div>
        <div className={styles.skills}>
          <h2>Skills & Experience</h2>
          <h3>Software</h3>
          <InfoList types={this.state.skills.software} />
          <h3>Process</h3>
          <InfoList types={this.state.skills.process} />
          <h3>Development</h3>
          <InfoList types={this.state.skills.development} />
        </div>
        <Experience />
        <Education />
      </div>

    )
  }
  
}

export default Resume;