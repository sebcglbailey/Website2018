import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Masonry.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: window.outerWidth / this.props.minWidth,
      children: this.props.children,
      rendered: false
    }

    this.windowResize = this.windowResize.bind(this)
    this.returnColumns = this.returnColumns.bind(this)
    this.getSmallestIndexFromNoArr = this.getSmallestIndexFromNoArr.bind(this)
    this.reorderChildren = this.reorderChildren.bind(this)
  }

  componentWillReceiveProps(nextState) {
    this.setState({ children: nextState.children, rendered: false })
  }

  componentDidMount() {
    this.reorderChildren(this.state.children)
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResize)
    this.windowResize()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.children.length !== this.state.children.length && !this.state.rendered) {
      this.reorderChildren(this.state.children)
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
    let columnHeights = []
    for (let i = 0; i < this.state.columns; i++) {
      columnHeights.push(0)
    }

    let orderedContent = [], reorderedContent = [];

    for (let i = 0; i < this.state.children.length; i++) {
      let columnNo = i%this.state.columns
      let column = this.container.children[columnNo]
      let contentNo = Math.floor(i / this.state.columns)
      let content = column.children[contentNo]
      orderedContent.push({
        reactContent: this.state.children[i],
        content: content,
        height: content.offsetHeight
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
      return obj.reactContent
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

    this.setState({ columns: columns})
  }

  returnColumns(children) {
    let columnArray = []
    for (let i = 0; i < this.state.columns; i++) {
      columnArray.push([])
    }

    let columns = children.map((child, index) => {
      let columnIndex = (index)%this.state.columns
      columnArray[columnIndex].push(child)
    })

    let columnStyle = {
      width: `${100/this.state.columns}%`,
      padding: `0 ${this.props.margin/2}px`
    }

    columnArray = columnArray.map((column) => {
      return(
        <div className={styles.column} style={columnStyle}>
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


















