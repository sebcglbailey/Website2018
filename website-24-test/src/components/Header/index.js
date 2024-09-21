import React, { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [location, setLocation] = useState();
  const [navLocation, setNavLocation] = useState();
  const [menuOpen, setMenuOpen] = useState();

  return(
    <div className='header'>
        <div className='logoBurgerWrapper'>
          <div className='logo'>
            <Link to='/'>
              <picture>
                {/* <source srcSet={logo} /> */}
                {/* <img src={logoPNG} alt='Sebastian Bailey Logo' /> */}
              </picture>
            </Link>
          </div>
          <div
            // onClick={handleBurgerClick()}
            // className={this.state.menuOpen ? (`burgerMenu active`) : 'burgerMenu'}
          >
            <div className='top'></div>
            <div className='middle'></div>
            <div className='bottom'></div>
          </div>
        </div>
        <div
          // ref={(elem) => this.nav = elem}
          // onClick={handleMenuClick()}
          // className={this.state.menuOpen ? (`navigation active`) : 'navigation'}
        >
          <HashLink smooth to='/resume/#case-studies'>case studies</HashLink>
          <HashLink smooth to='/resume/#work'>work</HashLink>
          <HashLink smooth to='/resume/#education'>education</HashLink>

          <a href="http://art.sebastianbailey.co.uk" target="_blank" rel="noreferrer">art</a>
          <a
            href="mailto:sebcglbailey@gmail.com?subject=I%20Want%20Your%20Work&body=Let%27s%20talk%20about%20Seb%2C%20Bailey.%20Let%27s%20talk%20about%20you%20and%20me."
          >
            contact
          </a>
        </div>
      </div>
  )
}