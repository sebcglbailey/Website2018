import React from 'react';

import Content from '../../Components/Content/';
import Card, {Cover, Info} from '../../Components/Card/';

import styles from './styles.css';

const info = [
  {
    id: "cambridge",
    title: "Cambridge University – Sidney Sussex College",
    dates: "2009 - 2012",
    link: "https://www.sid.cam.ac.uk/",
    info: [
      "Architecture – MA",
      "RIBA Part 1",
      "College Sports – Rugby & Snowboarding"
    ]
  },
  {
    id: "whitgift",
    title: "Whitgift School",
    dates: "2002 - 2009",
    link: "http://www.whitgift.co.uk/",
    info: [
      `A Levels<br/>
      4 A's<br/>
      Mathematics, Further Mathematics, Physics, Art`,
      `GCSE's<br/>
      6 A*, 3 A, 2 B`
    ]
  }
]

const Education = () => {
  let cards = info.map((school, index) => {
    return(
      <Card key={school.id}
        id={school.id}
        link={school.link}
        target="_blank"
      >
        <Info header={school.title}>
          <Content content={[school.dates]} />
          {
            school.info.map((info, index) => {
              return (
                <span
                  className={styles.infoSpan}
                  key={index}
                  dangerouslySetInnerHTML={{__html: info}}
                >
                </span>
              )
            })
          }
        </Info>
      </Card>
    )
  })
  return(
    <div className={styles.experience}>
      <h2>Education</h2>
      <div className={styles.experienceCards}>
        {cards}
      </div>
    </div>
  )
}

export default Education