import React from 'react';

import Content from '../../Components/Content/';
import Card, { Cover, Info } from '../../Components/Card/';
import Masonry from '../../Components/Masonry/';

import './styles.scss';

const info = [
  {
    id: "clearscore-ds",
    title: "ClearScore Technology Ltd.",
    link: "http://www.clearscore.com",
    role: "Design Systems Lead & Lead Product Designer, Group",
    dates: "Jan 2023 - Present",
    info: [
      "Currently re-establishing a design system across the ClearScore Group",
      "Working closely with a collaborative team of engineers across multiple platforms",
      "I own and contribute all assets and documentation within design",
      "Shaping the vision and strategy of the design system across all disciplines",
      "Consistently working with and leading designers across the whole ClearScore team to help shape and iterate on the existing libraries with over 150 components",
      "Closely coaching designers to consider and work with their engineering counterparts to build consistent components and design patterns",
    ]
  },
  {
    id: "clearscore-int",
    title: "ClearScore Ltd.",
    link: "http://www.clearscore.com",
    role: "Lead Product Designer, UK & International",
    dates: "Apr 2020 - Jan 2023",
    info: [
      "In just 6 months, I established a global design team across 3 countries and continents outside of the core UK business",
      "Leading on international product changes",
      "Setting up a strategy for global expansion",
      "Leading on sourcing and technical interviews for junior to senior designers",
      "Established ways of working and principles for the core UK design team to follow in order to support the smaller international teams",
      "Worked within the Marketplace team helping users to save money and apply with confidence to credit products",
      "Helped to establish new features and technology within the product",
      "Leading, managing and coaching other product designers to up-skill and progress through their careers",
      "Established a more global design vision for the company and the core product, paving the way for an increasingly personal experience across the main ClearScore product",
    ]
  },
  {
    id: "clearscore-ds-man",
    title: "ClearScore Ltd.",
    link: "http://www.clearscore.com",
    role: "Design Manager – Design Systems",
    dates: "Jul 2018 - April 2020",
    info: [
      "Led and managed a multi-disciplinary squad to build the first iteration of the ClearScore Design System",
      "Designed and built component libraries for the global team to use",
      "Introducing some new technologies to the core product",
      "Designing and curating an icon set and asset libraries",
      "Helped to launch into new markets 3x faster",
    ]
  },
  {
    id: "clearscore-pd",
    title: "ClearScore Ltd.",
    link: "http://www.clearscore.com",
    role: "Product Designer",
    dates: "August 2016 - Jul 2018",
    info: [
      "Sole Product Designer in ClearScore R&D Lab",
      "Responsible for working on new features and projects",
      "Core product enhancements and innovations",
      "Open Banking integration",
      "Voice interaction design through an Alexa Skill",
      "Interactive prototypes and prototype libraries",
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
    role: "Graphic Designer, Product Designer",
    dates: "May 2013 - February 2015",
    info: [
      "Annual report design",
      "Proofreading and preparing documents for print",
      "Brand development",
      "Design and development of email templates",
      "UX/UI for v2.0 of main iRooms product, including a HTML prototype",
      "Managing one other designer",
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
                  className='infoSpan'
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
    <div className='experience'>
      <h3>Work</h3>
        <Masonry minWidth={400} margin={16}>
          {cards}
        </Masonry>
    </div>
  )
}

export default Work