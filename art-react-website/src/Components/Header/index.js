import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import styles from './styles.css';

import logo from "../../logo-white.svg"
import logoPNG from "../../logo-white.png"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: window.location.pathname,
      navLocation: 0,
      menuOpen: false
    }

    this.navItems = []

    this.handleBurgerClick = this.handleBurgerClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleBurgerClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleMenuClick() {
    this.setState({ menuOpen: false })
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
          <div
            onClick={this.handleBurgerClick}
            className={this.state.menuOpen ? (`${styles.burgerMenu} ${styles.active}`) : styles.burgerMenu}
          >
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
          </div>
        </div>
        <div
          ref={(elem) => this.nav = elem}
          onClick={this.handleMenuClick}
          className={this.state.menuOpen ? (`${styles.navigation} ${styles.active}`) : styles.navigation}
        >
          {/* <NavLink activeClassName={styles.active} to="/projects">
              work
            </NavLink> */}
          {/* <NavLink activeClassName={styles.active} to="/resume">
            résumé
          </NavLink> */}
          {/* <NavLink activeClassName={styles.active} to="/extras">
              extras
            </NavLink> */}
          {/* <NavLink activeClassName={styles.active} to="/blog">
              blog
            </NavLink> */}
          {/* <NavLink activeClassName={styles.active} to="/contact">
            contact
          </NavLink> */}
          <a
            className={styles.emailMe}
            href="mailto:sebcglbailey@gmail.com?subject=Artwork&20Enquiry&body=I&27d&20love&20to&20talk&20about&20purchasing&20some&20of&20your&20artwork."
          >
            contact
          </a>
        </div>
      </div>
    )
  }
}

export default Header;