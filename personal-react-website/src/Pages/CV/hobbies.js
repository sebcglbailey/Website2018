import React, { Component } from 'react';

import Content from '../../Components/Content/';
import Card, { Cover, Info } from '../../Components/Card/';
import InfoList from '../../Components/InfoList/';

import styles from './styles.css';

const hobbies = [
  {
    key: "painting",
    title: "Painting",
    description: "Finding painting later on in life has helped me to keep my creative juices flowing when the day-to-day job keeps me otherwise occupied. It allows me really delve into those inner feelings and help showcase how I see the world."
  },
  {
    key: "snowboarding",
    title: "Snowboarding",
    description: "Snowboarding is my real passion in life. there really is no better feeling than gliding over a fresh dump of powder with the sun beating down on your back, and not hearing a sound except the crunch of snow beneath the board. I've been snowboarding since I was 10 years old, and try to go for at least one week a year.",
    imageSrc: ""
  },
  {
    key: "photography",
    title: "Photography",
    description: "I use photography in a lot of my work, and try to base a lot of my designs off of the photos that I take myself, rather than use boring stock photographs! Whenever I go somewhere new, I will try to take my SLR with me, but I always have my phone handy to take some shots for Instagram if I don't!",
    imageSrc: ""
  },
  // {
  //   key: "skiing",
  //   title: "Skiing",
  //   description: "Skiing isn't as good as snowboarding (here's where the skiiers go 'boo-hiss'), but it's still one of my favourite past-times. I've been skiing since I can remember (with a big gap in the middle to learn to snowboard) so it's easy to understand why I love winter and snow so much.",
  //   imageSrc: ""
  // },
  {
    key: "travelling",
    title: "Travelling",
    description: "I'm not exactly a veteran traveller, but I do love to go to different places when I get the chance to. Experiencing a different culture can be particularly rewarding and you get to learn so much. Wherever I go, I will always try and not travel the 'beaten track,' and I try to show that with the photographs I take there, finding different angles to view the sights from – so I don\'t end up with a photo a million people have taken before me!",
    imageSrc: ""
  },
  {
    key: "karate",
    title: "Karate",
    description: "I started karate when I was about 8 years old and became a black belt when I was 15. It's really helped me to learn about discipline and is definitely one of the greatest achievements in my life. I have never been as tired as I was after enduring the three hour grading for my black belt.",
    imageSrc: ""
  },
  {
    key: "music",
    title: "Music",
    description: "Life can't exist without music. It's as simple as that. I literally can't go a day without listening to something. You will rarely see me without a pair of headphones or just nodding along to a tune I have in my head.",
    imageSrc: ""
  },
  // {
  //   key: "djing",
  //   title: "DJing",
  //   description: "With my love for music comes the djing. I'm not really into the whole gig thing – it's more just for personal pleasure. I try to mess around on the decks every now and then (electronic), but I would really love to get into vinyl djing to really get back to the roots.",
  //   imageSrc: ""
  // },
  {
    key: "cooking",
    title: "Cooking",
    description: "I'll never consider myself to be a decent cook - my family will always manage to out-do me by a long shot - but I do like to throw together some ingredients in the kitchen and see how it turns out. If I'm trying to impress though, a recipe is definitely the way to go.",
    imageSrc: ""
  },

]

class Hobbies extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [],
      cards: []
    }

    this.buildList = this.buildList.bind(this)
    this.buildCards = this.buildCards.bind(this)

    this.handleListClick = this.handleListClick.bind(this)
  }

  componentDidMount() {
    this.buildList()
  }

  buildList() {

    let list = hobbies.map((hobby) => {
      return hobby.title
    })

    this.buildCards(list)

  }

  buildCards(list) {

    let cards = hobbies.map((hobby) => {
      return (
        <Card
          key={hobby.key}
          id={hobby.key}
        >
          <Info header={hobby.title}>
            <Content content={hobby.description} />
          </Info>
        </Card>
      )
    })

    this.setState({ cards: cards, list: list })

  }

  handleListClick(item) {

    console.log(item)

  }

  render() {
    return (
      <div className={styles.hobbies}>
        <h2>Hobbies & Interests</h2>
        <div className={styles.hobbyCards}>
          <InfoList
            onClick={this.handleListClick}
            types={this.state.list}
            default
          />
        </div>
      </div>
    )
  }

}

export default Hobbies