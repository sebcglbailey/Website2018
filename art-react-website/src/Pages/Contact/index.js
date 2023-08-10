import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContentContainer from '../../Components/ContentContainer';
import { H2 } from '../../Components/Headers/';

import Instagram from './instagram';

import styles from './styles.css';

class Contact extends Component {
  componentWillMount() {
    document.title = "Sebastian Bailey | Contact"
  }

  render() {
    return (
      <ContentContainer>
        <a
          className={styles.emailMe}
          href="mailto:sebcglbailey@gmail.com?subject=I%20Want%20Your%20Work&body=Let%27s%20talk%20about%20Seb%2C%20Bailey.%20Let%27s%20talk%20about%20you%20and%20me."
        >
          Mail Me
        </a>
        <div className={styles.insta}>
          <H2>Instagram</H2>
          <Instagram />
        </div>
      </ContentContainer>
    )
  }
  
}

export default Contact;