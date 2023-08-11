import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import styles from './styles.scss';

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
      <div className='header'>
        <div className='logoBurgerWrapper'>
          <div className='logo'>
            <Link to='/'>
              <picture>
                <source srcSet={logo} />
                <img src={logoPNG} alt='Sebastian Bailey Logo' />
              </picture>
            </Link>
          </div>
          <div
            onClick={this.handleBurgerClick}
            className={this.state.menuOpen ? ('burgerMenu active') : 'burgerMenu'}
          >
            <div className='top'></div>
            <div className='middle'></div>
            <div className='bottom'></div>
          </div>
        </div>
        <div
          ref={(elem) => this.nav = elem}
          onClick={this.handleMenuClick}
          className={this.state.menuOpen ? ('navigation active') : 'navigation'}
        >
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