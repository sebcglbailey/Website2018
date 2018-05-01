import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import styles from './styles.css';

import logo from "../../logo-white.svg"
import logoPNG from "../../logo-white.png"

class Header extends Component{
  constructor(props) {
    super(props)

    this.state = {
      location: window.location.pathname,
      navLocation: 0
    }

    this.navItems = []
  }

  render() {
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
          <div ref={(elem) => this.nav = elem} className={styles.navigation}>
            <NavLink exact activeClassName={styles.active} to="/">
              work
            </NavLink>
            <NavLink activeClassName={styles.active} to="/resume">
              résumé
            </NavLink>
            <NavLink activeClassName={styles.active} to="/extras">
              extras
            </NavLink>
            <NavLink activeClassName={styles.active} to="/blog">
              blog
            </NavLink>
            <NavLink activeClassName={styles.active} to="/contact">
              contact
            </NavLink>
          </div>
        </div>
    )
  }
}

export default Header;