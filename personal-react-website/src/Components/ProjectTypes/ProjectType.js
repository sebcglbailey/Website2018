import React, { Component } from 'react';

import styles from './ProjectTypes.css';
import {toggleType, getTypeClass} from './functions';

class ProjectType extends Component {
	constructor(props) {
		super(props)

    this.className = getTypeClass(this.props.type, styles)

		this.state = {
			type: this.props.type,
      className: this.className,
      rendered: false
		}

    this.content = this.props.type

		this.handleClick = this.handleClick.bind(this)
    this.getWidths = this.getWidths.bind(this)
    this.toggleContent = this.toggleContent.bind(this)

    this.style = {
      width: "auto",
      transition: `width ${this.props.duration}ms ease`
    }
    this.widths = {
      default: 0,
      expanded: 0
    }
	}

  toggleContent() {
    // this.getWidths()
    this.setState({
      type: toggleType(this.state.type)
    })
  }

	handleClick() {
    if (this.state.expanded == undefined) {
      this.style = {
        width: this.widths.default
      }
      this.content = this.props.type
    }

    if (this.state.expanded) {
      this.style = {
        width: this.widths.default,
        transition: `width ${this.props.duration}ms ease`
      }
    } else if (this.state.expanded == false) {
      this.style = {
        width: this.widths.expanded + 50,
        transition: `width ${this.props.duration}ms ease`
      }
    }

    if (!this.state.expanded) {
      this.setState({
        expanded: !this.state.expanded
      })
      setTimeout(() => {
        this.setState({
          type: toggleType(this.state.type)
        })
      }, this.props.duration)
    } else {
      this.setState({
        expanded: !this.state.expanded,
        type: toggleType(this.state.type)
      })
    }
	}

  getWidths() {
    if (this.state.expanded) {
      this.widths.expanded = this.elem.offsetWidth
    } else {
      this.widths.default = this.elem.offsetWidth
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expanded == undefined) {
      this.widths.expanded = this.elem.offsetWidth
      this.setState({ expanded: false })
      this.toggleContent()
    } 
    if (this.state.expanded) {
      this.style = {
        width: this.widths.expanded + this.elem.style.padding,
        transition: `width ${this.props.duration}ms ease`
      }
    } else {
      this.style = {
        width: this.widths.default,
        transition: `width ${this.props.duration}ms ease`
      }
      this.content = this.props.type
    }
  }

  componentDidMount() {
    this.getWidths()
    this.toggleContent()
  }

	render() {
		return (
      <div>
        <li
          ref={(elem) => this.elem = elem}
          style={this.style}
          onClick={this.handleClick}
          className={`${this.state.className}`}>
            {this.state.type}
          </li>
      </div>
		)
	}
}

export default ProjectType