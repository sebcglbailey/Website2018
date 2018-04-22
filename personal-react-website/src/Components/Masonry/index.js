import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './styles.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: window.outerWidth / this.props.minWidth,
      children: this.props.children,
      originalChildren: this.props.children,
      rendered: false
    }

    this.windowResize = this.windowResize.bind(this)
    this.returnColumns = this.returnColumns.bind(this)
    this.getSmallestIndexFromNoArr = this.getSmallestIndexFromNoArr.bind(this)
    this.reorderChildren = this.reorderChildren.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if (nextState.originalChildren !== this.state.originalChildren) {
      this.setState({ children: nextState.children, originalChildren: nextState.children, rendered: false })
    }
  }

  componentDidMount() {
    this.reorderChildren()
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResize)
    this.windowResize()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.children.length !== this.state.children.length
      && !this.state.rendered)
      || prevState.columns !== this.state.columns) {
        this.reorderChildren()
    }
  }

  getSmallestIndexFromNoArr(array) {
    let smallestIndex = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[smallestIndex]) {
        smallestIndex = i
      }
    }
    return smallestIndex
  }

  reorderChildren() {
    // Set up column heights array for calculating current heights
    let columnHeights = []
    for (let i = 0; i < this.state.columns; i++) {
      columnHeights.push(0)
    }
    // Set up ordered and reordered arrays
    let orderedContent = [], reorderedContent = [];

    // For each child, save the react class, and also the rendered element in the DOM
    for (let i = 0; i < this.state.originalChildren.length; i++) {

      let reactItem = this.state.originalChildren[i]
      let domItem = document.querySelector(`#${reactItem.key}`)

      orderedContent.push({
        reactItem: reactItem,
        content: domItem,
        height: domItem.offsetHeight
      })
    }

    for (let i = 0; i < orderedContent.length; i++) {
      let row = Math.floor(i/this.state.columns)

      let smallestColumnIndex = this.getSmallestIndexFromNoArr(columnHeights)
      columnHeights[smallestColumnIndex] += orderedContent[i].height

      if (!reorderedContent[row]) {
        reorderedContent[row] = []
      }
      reorderedContent[row][smallestColumnIndex] = orderedContent[i]

    }

    reorderedContent = [].concat.apply([], reorderedContent)
    reorderedContent = reorderedContent.map((obj) => {
      return obj.reactItem
    })

    this.setState({ children: reorderedContent, rendered: true })
  }

  windowResize() {
    let containerWidth = window.outerWidth
    if (this.container) {
      containerWidth = this.container.offsetWidth
    }
    let columns = Math.floor(containerWidth / this.props.minWidth)
    columns = columns == 0 ? 1 : columns
    if (columns >= this.state.children.length) {
      columns = this.state.children.length
    }
    console.log(containerWidth / this.props.minWidth)
    if (columns !== this.state.columns) {
      this.setState({ columns: columns })
    }
  }

  returnColumns(children) {
    let columnArray = []
    for (let i = 0; i < this.state.columns; i++) {
      columnArray.push([])
    }

    let columns = children.map((child, index) => {
      let columnIndex = index%this.state.columns
      columnArray[columnIndex].push(child)
    })

    let columnStyle = {
      width: `${100/this.state.columns}%`,
      padding: `0 ${this.props.margin/2}px`
    }

    columnArray = columnArray.map((column, index) => {
      return(
        <div key={index} style={columnStyle}>
          {column}
        </div>
      )
    })
    return columnArray
  }

  render() {
    let columns = this.returnColumns(this.state.children)

    return(
      <div ref={(elem) => {this.container = elem}} className={styles.container}>
        {columns}
      </div>
    )
  }
}

export default Masonry;


















