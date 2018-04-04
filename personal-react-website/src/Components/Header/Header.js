import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import styles from './Header.css';

import logo from "../../logo-white.svg"
import logoPNG from "../../logo-white.png"

const Header = (props) => {
  return (
      <div className={styles.header}>
        <div className={styles.logoBurgerWrapper}>
          <div className={styles.logo}>
            <Link to='/'>
              <picture>
                <source srcSet={logo} />
                <img src={logoPNG} alt='Sebastian Bailey Logo' />
              </picture>
            </Link>
          </div>
          <div className="burger-menu">
            <div></div>
          </div>
        </div>
        <ul>
          <Link activeClassName={styles.active} to="/">
            <li>projects</li>
          </Link>
          <Link activeClassName={styles.active} to="/work">
            <li>work</li>
          </Link>
          <Link activeClassName={styles.active} to="/about">
            <li>about</li>
          </Link>
          <Link activeClassName={styles.active} to="/blog">
            <li>blog</li>
          </Link>
          <Link activeClassName={styles.active} to="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </div>
  );
}

export default Header;