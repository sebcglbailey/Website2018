import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.css';

import Cover from './Cover';
import Info from './Info';

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={this.props.id} className={styles.card}>
        {
          this.props.link ? (
            <Link target={this.props.target} to={this.props.link}>
              <div className={this.props.landscape ? `${styles.cardContent} ${styles.landscape}` : styles.cardContent}>
                {this.props.children}
              </div>
            </Link>
          ) : (
            <div className={this.props.landscape ? `${styles.cardContent} ${styles.landscape}` : styles.cardContent}>
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