import React from 'react';

import Content from '../../Components/Content/';
import Card, { Cover, Info } from '../../Components/Card/';
import Masonry from '../../Components/Masonry/';

import styles from './styles.css';

const info = [
  {
    id: "clearscore",
    title: "ClearScore Ltd.",
    link: "http://www.clearscore.com",
    role: "Design Systems Lead & Lead Product Designer",
    dates: "April 2020 - Present",
    info: [
      "Owning and building the ClearScore Group Design System",
      "Designing, documenting and maintaining multiple design libraries with over 200 components",
      "Expanding the International design team",
      "International design vision and strategy",
      "Management of multiple designers, progressing them through their careers",
      "Establish new features and technology within the Marketplace of the core ClearScore app",
      "Global design vision for the core ClearScore product"
    ]
  },
  {
    id: "clearscore",
    title: "ClearScore Ltd.",
    link: "http://www.clearscore.com",
    role: "Product Designer, Design Systems Manager",
    dates: "August 2016 - April 2020",
    info: [
      "User flows for new features and verticals",
      "Experience design from concept to delivery",
      "User Interface design and motion design",
      "R&D in design and engineering",
      "Prototyping evangalist - pushing the need for and developing prototypes",
      "Building and leading the Design System",
      "Facilitating design sprints, and critiques",
      "Managing and mentoring designers",
      "Managing a front-end engineering team",
      "Project management (Scrum & Kanban)",
    ]
  },
  {
    id: "palringo",
    title: "Palringo Ltd.",
    link: "http://www.palringo.com",
    role: "Graphic, Web & UX Designer",
    dates: "March 2015 - August 2016",
    info: [
      "Designing and developing microsites for games",
      "Creating marketing campaign creatives",
      "Product design for web-app version of core chat offering",
      "Working in teams and individually from concept to launched product",
      "Prototypes built in HTML/CSS and native prototypes built in Framer"
    ]
  },
  {
    id: "imprima",
    title: "Imprima Ltd.",
    link: "http://www.imprima.com",
    role: "Head of Design, Graphic Designer",
    dates: "May 2013 - February 2015",
    info: [
      "Annual report design",
      "Proofreading and preparing documents for print",
      "Brand development",
      "Design and development of email templates",
      "UX/UI for v2.0 of main iRooms product, including a HTML prototype",
      "Managing one other graphic designer"
    ]
  },
  {
    id: "fosters",
    title: "Foster + Partners",
    link: "http://www.fosterandpartners.com",
    role: "Work experience, Architectural Assistant",
    dates: "2008, 2009"
  }
]

const Work = () => {
  let cards = info.map((job, index) => {
    return (
      <Card key={job.id}
        id={job.id}
        link={job.link}
        target="_blank"
      >
        <Info header={job.title}>
          <Content content={[job.role, job.dates]} />
          {
            job.info ? job.info.map((info, index) => {
              return (
                <span
                  className={styles.infoSpan}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: info }}
                >
                </span>
              )
            }) : null
          }
        </Info>
      </Card>
    )
  })
  return (
    <div className={styles.experience}>
      <h3>Work</h3>
      {
        info.length % 2 == 0 ? (
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

export default Work