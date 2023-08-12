import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import './styles.scss';

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
            className={this.state.menuOpen ? (`burgerMenu active`) : 'burgerMenu'}
          >
            <div className='top'></div>
            <div className='middle'></div>
            <div className='bottom'></div>
          </div>
        </div>
        <div
          ref={(elem) => this.nav = elem}
          onClick={this.handleMenuClick}
          className={this.state.menuOpen ? (`navigatio active`) : 'navigation'}
        >
          {/* <NavLink activeClassName='active' to="/projects">
              work
            </NavLink> */}
          {/* <NavLink activeClassName='active' to="/resume">
            résumé
          </NavLink> */}
          {/* <NavLink activeClassName='active' to="/extras">
              extras
            </NavLink> */}
          {/* <NavLink activeClassName='active' to="/blog">
              blog
            </NavLink> */}
          {/* <NavLink activeClassName='active' to="/contact">
            contact
          </NavLink> */}
          <a href="http://art.sebastianbailey.co.uk" target="_blank">art</a>
          <a
            href="mailto:sebcglbailey@gmail.com?subject=I%20Want%20Your%20Work&body=Let%27s%20talk%20about%20Seb%2C%20Bailey.%20Let%27s%20talk%20about%20you%20and%20me."
          >
            contact
          </a>
        </div>
      </div>
    )
  }
}

export default Header;