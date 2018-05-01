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

class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: fields,
      skills: skills,
      work: work
    }

    this.handlePageLoad = this.handlePageLoad.bind(this)
    this.renderExperience = this.renderExperience.bind(this)
  }

  componentWillMount() {
    document.title = "Work"
    this.handlePageLoad()
  }

  handlePageLoad() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  renderExperience() {

    let cards = this.state.work.map((job, index) => {
      return(
        <Card key={job.id}
          id={job.id}
          link={job.link}
          target="_blank">
            <Info header={job.title}>
              <Content content={[job.role, job.dates]} />
              {
                job.info ? (
                  job.info.map((info, index) => {
                    return <span className={styles.infoSpan} key={index}>{info}</span>
                  })
                ): null
              }
            </Info>
        </Card>
      )
    })

    this.experience = (
      <div className={styles.experience}>
        <h2>Experience</h2>
        {
          this.state.work.length%2 == 0 ? (
            <Masonry minWidth={400} margin={16}>
              {cards}
            </Masonry>
          ) : (
            <div className={styles.experienceCards}>
              {cards}
            </div>
          )
        }
      </div>
    )
  }

  render() {
    this.renderExperience()
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
        <div className={styles.experience}>
          {this.experience}
        </div>
      </div>

    )
  }
  
}

export default Work;