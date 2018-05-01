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

    // this.setActiveStyle = this.setActiveStyle.bind(this)
  }

  // componentWillMount() {
  //   window.addEventListener("resize", () => {
  //     let rect = this.nav.getBoundingClientRect()
  //     this.setState({navLocation: rect.x})
  //   })
  // }

  // componentDidMount() {
  //   for (let i = 0; i < this.nav.children.length; i++) {
  //     let navItem = this.nav.children[i];
  //     navItem.addEventListener("mouseover", () => {
  //       this.setActiveStyle(navItem)
  //     })
  //   }

  //   let rect = this.nav.getBoundingClientRect()
  //   this.setState({navLocation: rect.x})
  // }

  // setActiveStyle(navItem) {
  //   let rect = navItem.getBoundingClientRect()
  //   this.setState({
  //     activeLinkStyle: {
  //       width: rect.width,
  //       left: rect.x - this.state.navLocation
  //     }
  //   })
  // }

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
            <NavLink activeClassName={styles.active} to="/cv">
              cv
            </NavLink>
            <NavLink activeClassName={styles.active} to="/about">
              about
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