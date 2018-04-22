import React, { Component } from 'react';

import InfoList from '../../Components/InfoList/';
import Card, {Cover, Info} from '../../Components/Card/';
import Masonry from '../../Components/Masonry/';

import styles from './styles.css';

class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: [
        "User Experience",
        "User Interface",
        "Prototyping",
        "Photography",
        "Web Development",
        "Graphic Design"
      ],
      skills: {
        software: [
          "Sketch",
          "Framer",
          "Photoshop",
          "Illustrator",
          "InDesign",
          "After Effects",
          "Adobe XD"
        ],
        process: [
          "Concept Design",
          "Wireframing",
          "User Research",
          "User Testing",
          "Research & Development",
          "Design Sprints",
          "Agile"
        ],
        development: [
          "HTML5",
          "CSS3",
          "Sass",
          "Javascript",
          "ES6",
          "Coffeescript",
          "jQuery",
          "PHP",
          "AngularJS",
          "React",
          "Git",
          "Wordpress"
        ]
      },
      work: [
        {
          id: "clearscore",
          title: "ClearScore Ltd.",
          link: "http://www.clearscore.com",
          role: "UX/UI Designer, Prototyper & Project Lead",
          dates: "August 2016 - Present"
        },
        {
          id: "palringo",
          title: "Palringo Ltd.",
          link: "http://www.palringo.com",
          role: "Graphic, Web & UX Designer",
          dates: "March 2015 - August 2016"
        },
        {
          id: "imprima",
          title: "Imprima Ltd.",
          link: "http://www.imprima.com",
          role: "Head of Design, Graphic Designer",
          dates: "May 2013 - February 2015"
        }
      ]
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
              <p>{job.role}</p>
              <p>{job.dates}</p>
            </Info>
        </Card>
      )
    })
    console.log(cards)

    this.experience = (
      <div className={styles.experience}>
        <h2>Experience</h2>
        <Masonry minWidth={400} margin={16}>
          {cards}
        </Masonry>
      </div>
    )
  }

  render() {
    this.renderExperience()
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>Introduction</h2>
          <p>Clean lines, Structure, and a Solid Concept.<br/>
          These are the fundamental rules that I base all of my designs upon.</p>
          <p>I have always been passionate about art and design, and even from a young age I have been drawn to look at the world from an artistic point of view.</p>
          <p>I believe that my work reflects my love of simplicity, whilst never ignoring the underlying concept and key principles.</p>
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
          {/*<h2>Experience</h2>
          <p><a target='_blank' href='http://www.clearscore.com'>ClearScore Ltd.</a> – UX Designer – August 2016 - Present</p>
          <p><a target='_blank' href='htpp://www.palringo.com'>Palringo Ltd.</a> – Graphic, Web & UX Designer – March 2015 - August 2016</p>
          <p><a target='_blank' href='http://www.imprima.com'>Imprima Ltd.</a> – Head of Design, Graphic Designer – May 2013 - February 2015</p>
          <p><a target='_blank' href='http://www.fosterandpartners.com'>Foster + Partners</a> – Work Experience, Architectural Assistant – 2008, 2009</p>*/}
          {this.experience}
        </div>
      </div>

    )
  }
  
}

export default Work;