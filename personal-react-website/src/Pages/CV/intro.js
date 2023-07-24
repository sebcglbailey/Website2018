import React, { Component } from 'react';

import styles from './styles.css';

const list = [
  "Design",
  "Lead",
  "Code",
  "Paint",
  "Manage",
  "Systemise",
  "Snowboard",
  "Prototype"
]

let speed = 35
let interval = 2250

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemIndex: 0,
      listItem: list[0],
      mounted: false
    }

    this.changeListItem = this.changeListItem.bind(this)
    this.animateListItemOut = this.animateListItemOut.bind(this)
    this.animateListItemIn = this.animateListItemIn.bind(this)
  }

  componentDidMount() {

    this.setState({ mounted: true })

    this.animate = setInterval(() => {
      this.changeListItem()
    }, interval)

  }

  componentWillUnmount() {

    this.setState({ mounted: false })
    clearInterval(this.animate)

  }

  changeListItem() {

    if (this.state.mounted) {

      this.animateListItemOut(this.state.listItem, (done) => {

        let index = this.state.itemIndex
        if (index == list.length - 1) {
          index = 0
        } else {
          index++
        }

        if (this.state.mounted) {
          setTimeout(() => {
            this.animateListItemIn(list[index], index)
          }, speed * 3)
        }

      })

    }

  }

  animateListItemOut(listItem, callback) {

    if (this.state.mounted) {

      let stringLength = listItem.length

      if (stringLength == 0) {
        return callback(true)
      } else {
        let string = listItem.slice(0, stringLength - 1)
        if (this.state.mounted) {
          this.setState({ listItem: string })
          this.animateOut = setTimeout(() => {
            this.animateListItemOut(string, callback)
          }, speed)
        }
      }

    }

  }

  animateListItemIn(listItem, index, callback) {

    if (this.state.mounted) {

      let stringLength = list[index].length
      let currentStringLength = this.state.listItem.length

      if (currentStringLength !== stringLength) {
        let string = list[index].slice(0, this.state.listItem.length + 1)
        if (this.state.mounted) {
          this.setState({ listItem: string, itemIndex: index })
          setTimeout(() => {
            this.animateListItemIn(string, index, callback)
          }, 50)
        }

      } else return

    }

  }

  render() {
    return (
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