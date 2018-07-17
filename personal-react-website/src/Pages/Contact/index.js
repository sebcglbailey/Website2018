import React, { Component } from 'react';

import ContentContainer from '../../Components/ContentContainer';
import { H2 } from '../../Components/Headers/';

import styles from './styles.css';

class Contact extends Component {
  componentWillMount() {
    document.title = "Contact"
  }

  render() {
    return (
      <ContentContainer>
        <div className={styles.social}>
          <H2>Social</H2>
        </div>
        <div className={styles.insta}>
          <H2>Instagram</H2>
        </div>
      </ContentContainer>
    )
  }
  
}

export default Contact;