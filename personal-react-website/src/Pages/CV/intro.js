import React, { Component } from 'react';

import styles from './styles.css';

const list = [
  "Design",
  "Code",
  "Snowboard",
  "Prototype",
  "Systemise",
  "Lead",
]

let speed = 35
let interval = 2250

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemIndex: 0,
      listItem: list[0]
    }

    this.changeListItem = this.changeListItem.bind(this)
    this.animateListItemOut = this.animateListItemOut.bind(this)
    this.animateListItemIn = this.animateListItemIn.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      this.changeListItem()
    }, interval)
  }

  changeListItem() {

    this.animateListItemOut(this.state.listItem, (done) => {

      let index = this.state.itemIndex
      if (index == list.length - 1) {
        index = 0
      } else {
        index++
      }

      setTimeout(() => {
        this.animateListItemIn(list[index], index, (done) => {

          // setTimeout(() => {
          //   this.changeListItem()
          // }, interval)

        })
      }, speed*3)

    })

  }

  animateListItemOut(listItem, callback) {

    let stringLength = listItem.length

    if (stringLength == 0) {
      return callback(true)
    } else {
      let string = listItem.slice(0, stringLength - 1)
      this.setState({listItem: string})
      this.animateOut = setTimeout(() => {
        this.animateListItemOut(string, callback)
      }, speed)
    }

  }

  animateListItemIn(listItem, index, callback) {

    let stringLength = list[index].length
    let currentStringLength = this.state.listItem.length

    if (currentStringLength == stringLength) {
      return callback(true)
    } else {
      let string = list[index].slice(0, this.state.listItem.length+1)
      this.animateIn = this.setState({listItem: string, itemIndex: index})
      setTimeout(() => {
        this.animateListItemIn(string, index, callback)
      }, 50)
    }

  }

  render() {
    return(
      <div className={styles.introContainer}>
        <div>
          Hi, I'm Seb.<br />
          I <span className={styles.introChanger}>{this.state.listItem}</span>
        </div>
      </div>
    )
  }
}

export default Intro