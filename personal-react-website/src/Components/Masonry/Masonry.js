import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Masonry.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    if (typeof this.props.minWidth == "number") {
      this.state.minWidth = this.props.minWidth
    } else if (typeof this.props.minWidth == "string") {
      this.state.minWidth = Number(this.props.minWidth.replace("px", ""))
    }

    this.columns = []
    this.sortedContent = [[<div></div>], [<div></div>], [<div></div>]]

    this.getContentAtStart = this.getContentAtStart.bind(this)
    this.getContentAtIndex = this.getContentAtIndex.bind(this)
    this.getShortestColumnIndex = this.getShortestColumnIndex.bind(this)
    this.renderColumns = this.renderColumns.bind(this)
    this.renderStart = this.renderStart.bind(this)
    this.windowResize = this.windowResize.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  /*
    BEFORE FIRST TIME RENDER
  */
  componentWillMount() {
    window.addEventListener("resize", this.windowResize)
    this.windowResize()
    this.renderColumns()
  }

  /*
    AFTER FIRST TIME RENDER
  */
  componentDidMount() {
    this.addItem()
  }

  /*
    AFTER COMPONENT UPDATES
  */
  componentDidUpdate() {
    if (this.state.items == this.state.columns) {
      this.renderStart()
    } else if (this.state.items <= this.props.children.length) {
      let shortestColumnIndex = this.getShortestColumnIndex()
      let newContent = this.getContentAtIndex(this.state.items - 1)
      this.sortedContent[shortestColumnIndex].push(newContent)
      this.renderColumns()
      this.addItem()
    }
  }

  addItem() {
    this.setState({ items: this.state.items + 1 })
  }

  /*
    CHECK THE WINDOW SIZE
      - SET COLUMN NO. FOR SIZE
  */
  windowResize() {
    let windowWidth = window.outerWidth;
    let columns = Math.floor(windowWidth / (this.props.minWidth))
    if (columns == 0) {
      columns = 1
    }
    if (columns !== this.state.columns) {
      this.setState({ columns: columns, items: columns-1 })
    }
  }

  /*
    START THE RENDERING OF THE CONTENT
  */
  renderStart() {
    this.sortedContent = []
    let content = this.getContentAtStart();
    for (let i = 0; i < this.state.columns; i++) {
      this.sortedContent.push([content[i]]);
    }
    this.renderColumns()
    this.addItem()
  }

  /*
    WRITE COLUMN DIVS
  */
  renderColumns() {
    this.columns = []

    let {columns} = this.state
    let columnWidth = `${100/columns}%`
    let columnPadding = `0 ${this.props.margin/2}px`

    let columnStyle = {
      width: columnWidth,
      padding: columnPadding
    }

    for (let i = 0; i < this.sortedContent.length; i++) {
      let columnArray = this.sortedContent[i];
      this.columns.push(
        <div className={styles.column} style={columnStyle}>
          {columnArray}
        </div>
      )
    }
  }

  /*
    GET THE INDEX OF THE SHORTEST COLUMN
  */
  getShortestColumnIndex() {
    let shortestColumnIndex = 0;
    let shortestColumn = this.elem.children[0]
    for (let i = 0; i < this.elem.children.length; i++) {
      let thisColumn = this.elem.children[i]
      if (thisColumn.clientHeight < shortestColumn.clientHeight) {
        shortestColumnIndex = i;
        shortestColumn = thisColumn
      }
    }
    return shortestColumnIndex;
  }

  /*
    GET THE FIRST CONTENT PIECES FOR THE COLUMNS
  */
  getContentAtStart() {
    return this.props.children.filter((content, index) => {
      if (index < this.state.columns) {
        return content
      }
    })
  }

  /*
    GET THE CONTENT PIECE AT AN INDEX
  */
  getContentAtIndex(i) {
    return this.props.children[i]
  }

  /*
    RENDER COMPONENT
  */
  render() {
    return(
      <div ref={(elem) => {this.elem = elem}} className={styles.container}>
        {this.columns}
      </div>
    )
  }
}

export default Masonry;