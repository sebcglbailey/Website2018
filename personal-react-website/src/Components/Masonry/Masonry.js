import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Masonry.css';

// class Masonry extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       sortedContent: this.props.children,
//       finished: false
//     }

//     if (typeof this.props.minWidth == "number") {
//       this.state.minWidth = this.props.minWidth
//     } else if (typeof this.props.minWidth == "string") {
//       this.state.minWidth = Number(this.props.minWidth.replace("px", ""))
//     }

//     this.columns = []
//     this.sortedContent = [[<div></div>], [<div></div>], [<div></div>]]

//     this.getContentAtStart = this.getContentAtStart.bind(this)
//     this.getContentAtIndex = this.getContentAtIndex.bind(this)
//     this.getShortestColumnIndex = this.getShortestColumnIndex.bind(this)
//     this.renderStart = this.renderStart.bind(this)
//     this.windowResize = this.windowResize.bind(this)
//     this.addItem = this.addItem.bind(this)
//   }

//   /*
//     BEFORE FIRST TIME RENDER
//   */
//   componentWillMount() {
//     window.addEventListener("resize", this.windowResize)
//     this.windowResize()
//   }

//   /*
//     AFTER FIRST TIME RENDER
//   */
//   componentDidMount() {
//     this.addItem()
//   }

//   componentWillReceiveProps(nextState) {
//     if (nextState.children !== this.state.children) {
//       this.setState(nextState)
//     }
//   }

//   /*
//     AFTER COMPONENT UPDATES
//   */
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.items == this.state.columns) {
//       this.renderStart()
//     } else if (this.state.items <= this.props.children.length) {
//       let shortestColumnIndex = this.getShortestColumnIndex()
//       let newContent = this.getContentAtIndex(this.state.items - 1)
//       this.sortedContent[shortestColumnIndex].push(newContent)
//       if (this.state.items == this.props.children.length) {
//         this.setState({ sortedContent: this.sortedContent, finished: true })
//         this.addItem()
//       } else {
//         this.addItem()
//       }
//     }
//   }

//   addItem() {
//     this.setState({ items: this.state.items + 1 })
//   }

//   /*
//     CHECK THE WINDOW SIZE
//       - SET COLUMN NO. FOR SIZE
//   */
//   windowResize() {
//     let windowWidth = window.outerWidth;
//     let columns = Math.floor(windowWidth / (this.props.minWidth))
//     columns = columns == 0 ? 1 : columns;
//     if (columns >= this.props.children.length) {
//       columns = this.props.children.length
//       this.maxWidth = this.props.minWidth
//     }
//     if (columns !== this.state.columns) {
//       this.setState({ columns: columns, items: columns-1 })
//     }
//   }

//   /*
//     START THE RENDERING OF THE CONTENT
//   */
//   renderStart() {
//     this.sortedContent = []
//     let content = this.getContentAtStart();
//     for (let i = 0; i < this.state.columns; i++) {
//       this.sortedContent.push([content[i]]);
//     }
//     // this.renderColumns()
//     this.addItem()
//   }

//   /*
//     GET THE INDEX OF THE SHORTEST COLUMN
//   */
//   getShortestColumnIndex() {
//     let shortestColumnIndex = 0;
//     let shortestColumn = this.elem.children[0]
//     for (let i = 0; i < this.elem.children.length; i++) {
//       let thisColumn = this.elem.children[i]
//       if (thisColumn.clientHeight < shortestColumn.clientHeight) {
//         shortestColumnIndex = i;
//         shortestColumn = thisColumn
//       }
//     }
//     return shortestColumnIndex;
//   }

//   /*
//     GET THE FIRST CONTENT PIECES FOR THE COLUMNS
//   */
//   getContentAtStart() {
//     return this.props.children.filter((content, index) => {
//       if (index < this.state.columns) {
//         return content
//       }
//     })
//   }

//   /*
//     GET THE CONTENT PIECE AT AN INDEX
//   */
//   getContentAtIndex(i) {
//     return this.props.children[i]
//   }

//   /*
//     RENDER COMPONENT
//   */
//   render() {
//     let columnsArray = []

//     let {columns} = this.state
//     let columnWidth = `${100/columns}%`
//     let columnPadding = `0 ${this.props.margin/2}px`

//     let columnStyle = {
//       width: columnWidth,
//       padding: columnPadding
//     }

//     if (this.maxWidth && this.state.columns > 1) {
//       columnStyle.maxWidth = this.maxWidth
//     }

//     let content = this.state.finished ? this.state.sortedContent : this.sortedContent;
//     columnsArray = content.map((array) => {
//       return(
//         <div className={styles.column} style={columnStyle}>
//           {array}
//         </div>
//       )
//     })

//     return(
//       <div ref={(elem) => {this.elem = elem}} className={styles.container}>
//         {columnsArray}
//       </div>
//     )
//   }
// }

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: window.outerWidth / this.props.minWidth,
      children: this.props.children
    }

    this.windowResize = this.windowResize.bind(this)
    this.returnColumns = this.returnColumns.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if (this.state.children !== nextState.children) {
      this.setState({ children: nextState.children })
    }
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResize)
    this.windowResize()
  }

  windowResize() {
    let windowWidth = window.outerWidth
    let columns = Math.floor(windowWidth / this.props.minWidth)
    columns = columns == 0 ? 1 : columns
    if (columns >= this.props.children.length) {
      columns = this.props.children.length
    }

    this.setState({ columns: columns })
  }

  returnColumns(children) {
    let columnArray = []
    for (let i = 0; i < this.state.columns; i++) {
      columnArray.push([])
    }

    let columns = children.map((child, index) => {
      let columnIndex = (index+1)%this.state.columns
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
      <div ref={(elem) => {this.elem = elem}} className={styles.container}>
        {columns}
      </div>
    )
  }
}

export default Masonry;


















