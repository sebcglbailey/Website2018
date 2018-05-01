import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Column from './Column';

import styles from './styles.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      originalContent: this.props.children,
      content: 0
    }

    // this.reorderContent = this.reorderContent.bind(this)
    this.addContent = this.addContent.bind(this)
    this.renderColumns = this.renderColumns.bind(this)
    this.getSmallestColumn = this.getSmallestColumn.bind(this)
    this.windowResize = this.windowResize.bind(this)
    this.getColumnStyle = this.getColumnStyle.bind(this)
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResize)
    this.renderColumns()
  }

  componentDidMount() {
    this.addContent()
    this.renderColumns()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loaded == true && this.props.loaded == false) {
      this.renderColumns()
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.children !== this.props.children) {
      this.setState({ originalContent: nextProps.children, content: 0 })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.children == this.props.children) {
      this.addContent()
    } else if (prevProps.children.length == this.props.children.length) {
      this.renderColumns()
    } else {
      this.addContent()
    }
  }

  windowResize() {
    let {noOfColumns} = this.getColumnStyle()
    if (this.noOfColumns !== noOfColumns) {
      this.renderColumns()
    }
  }

  addContent() {
    if (this.state.content < this.props.children.length) {
      let smallestColumn = this.getSmallestColumn()
      this.renderColumns(this.props.children[this.state.content], smallestColumn)
    }
  }

  getSmallestColumn() {
    let smallestColumn = this.container.children[0]
    let smallestIndex = 0
    for (let i = 0; i < this.container.children.length; i++) {
      if (this.container.children[i].offsetHeight < smallestColumn.offsetHeight) {
        smallestColumn = this.container.children[i]
        smallestIndex = i
      }
    }
    return smallestIndex
  }

  reorderContent(children) {
    // children.map((child, i) => {
    //   let index = children.indexOf(child)%noOfColumns
    //   content[index].push(child)
    // })

    // this.reactColumns = []

    // content = content.map((column, i) => {
    //   let reactColumn = (<div key={`column-${i}`} style={columnStyle}>{column}</div>)
    //   this.reactColumns.push(reactColumn)
    //   return reactColumn
    // })

    // return content
  }

  getColumnStyle() {
    let containerWidth = this.container ? this.container.offsetWidth : window.outerWidth > 450 ? window.outerWidth - 36 : window.outerWidth - 28;
    let noOfColumns = Math.floor(containerWidth / this.props.minWidth)
    if (noOfColumns == 0) {
      noOfColumns = 1
    }
    noOfColumns = this.props.children.length < noOfColumns ? this.props.children.length : noOfColumns;

    let columnStyle = {
      noOfColumns: noOfColumns,
      width: `${100/this.noOfColumns}%`,
      padding: `0 ${this.props.margin/2}px`
    }

    return columnStyle
  }

  renderColumns(child, index) {

    let columnStyle = this.getColumnStyle()
    this.noOfColumns = columnStyle.noOfColumns

    let columnContents;

    if (!child) {
      columnContents = []
      for (let i = 0; i < this.noOfColumns; i++) {
        columnContents.push([this.props.children[i]])
      }
    } else {
      columnContents = this.state.columnContents
      for (let i = 0; i < this.noOfColumns; i++) {
        if (index == i && columnContents[i]) {
          columnContents[i].push(child)
        }
      }
    }

    let columns = []

    for (let i = 0; i < this.noOfColumns; i++) {
      let thisColumnContents = columnContents[i]
      let reactColumn = (
        <Column
          key={`column-${i}`}
          style={columnStyle}>
            {thisColumnContents.map((child, index) => {
              return child
            })}
        </Column>
      )
      columns.push(reactColumn)
    }

    if (!child) {
      this.setState({ columns: columns, columnContents: columnContents, content: this.noOfColumns })
    } else {
      this.setState({ columns: columns, columnContents: columnContents, content: this.state.content + 1 })
    }
  }

  render() {
    return(
      <div ref={(elem) => {this.container = elem}}
        className={styles.container}>
          {this.state.columns}
      </div>
    )
  }
}

Masonry.defaultProps = {
  minWidth: 400,
  margin: 16
}

export default Masonry