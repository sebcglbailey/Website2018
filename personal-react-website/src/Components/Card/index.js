import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Cover from './Cover';
import Info from './Info';

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={this.props.id} className='card'>
        {
          this.props.link && this.props.link.includes('http') ? (
            <a target={this.props.target} href={this.props.link}>
              <div className={this.props.landscape ? 'cardContent landscape' : 'cardContent'}>
                {this.props.children}
              </div>
            </a>
          ) : this.props.link ? (
            <Link target={this.props.target} to={this.props.link}>
              <div className={this.props.landscape ? 'cardContent landscape' : 'cardContent'}>
                {this.props.children}
              </div>
            </Link>
          ) : (
            <div className={this.props.landscape ? 'cardContent landscape' : 'cardContent'}>
              {this.props.children}
            </div>
          )
        }
      </div>
    )
  }
}

export default Card;
exports.Cover = Cover;
exports.Info = Info;