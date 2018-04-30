import React, { Component } from 'react';

import styles from './styles.css';

class Masonry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: Math.floor(window.outerWidth / this.props.minWidth) == 0 ? 1 : Math.floor(window.outerWidth / this.props.minWidth),
      children: this.props.children,
      contentsLoaded: this.props.contentsLoaded
    }

    this.windowResize = this.windowResize.bind(this)
    this.renderColumns = this.renderColumns.bind(this)
    this.reorder = this.reorder.bind(this)
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResize)
  }

  componentDidMount() {
    this.windowResize()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contentsLoaded == true && this.state.contentsLoaded == false) {
      this.reorder()
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.children !== this.state.children) {
      this.setState({
        children: nextProps.children
      })
    }
  }

  windowResize() {
    let containerWidth = this.container ? this.container.offsetWidth : window.outerWidth;
    let columns = Math.floor(containerWidth / this.props.minWidth)
    columns = columns == 0 ? 1 : columns;
    columns = columns >= this.state.children.length ? this.state.children.length : columns;

    if (columns !== this.state.columns) {
      this.setState({ columns: columns })
    }
  }

  renderColumns(children) {
    let columns = []
    let noOfColumns = this.state.columns

    for (let i = 0; i < noOfColumns; i++) {
      columns.push([])
    }

    children.map((child, index) => {
      let columnIndex = index%noOfColumns
      columns[columnIndex].push(child)
    });

    let columnStyle = {
      width: `${100/noOfColumns}%`,
      padding: `0 ${this.props.margin/2}px`
    }

    let layout = columns.map((column, index) => {
      return(
        <div key={index} style={columnStyle}>
          {column}
        </div>
      )
    })

    return layout
  }

  reorder() {
    
    let columnHeights = []
    let columns = []
    for (let i = 0; i < this.state.columns; i++) {
      columnHeights.push(0)
      columns.push([])
    }

    let orderedContent = this.state.children.map((child, index) => {

      let reactItem = child
      let domItem = document.querySelector(`#${reactItem.key}`)

      return {
        reactItem: reactItem,
        domItem: domItem,
        height: domItem.offsetHeight
      }

    })

    orderedContent.map((object, index) => {
      let smallestColumn = columnHeights.indexOf(this.getSmallestNumber(columnHeights))
      columnHeights[smallestColumn] += object.height

      columns[smallestColumn].push(object.reactItem)
    })

    let orderedChildren = []
    for (let i = 0; i < this.state.children.length/2 + 1; i++) {
      columns.map((column, index) => {
        if (column[i]) {
          orderedChildren.push(column[i])
        }
      })
    }

    this.setState({ orderedChildren: orderedChildren })

  }

  getSmallestNumber(array) {
    let smallestNumber = 99999999
    array.map((number) => {
      if (number < smallestNumber) {
        smallestNumber = number
      }
    })
    return smallestNumber
  }

  render() {
    let columns = this.state.orderedChildren ? this.renderColumns(this.state.orderedChildren) : this.renderColumns(this.state.children)
    return(
      <div ref={(elem) => this.container = elem}
        className={styles.container}>
          {columns}
      </div>
    )
  }
}

Masonry.defaultProps = {
  minWidth: 400,
  margin: 16
}

export default Masonry;