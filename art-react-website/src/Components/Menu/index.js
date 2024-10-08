import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="menuContainer">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="menuItem"  
            >
              Featured work
            </NavLink>
            <NavLink className="menuItem" to="/art">
              All paintings
            </NavLink>
            <NavLink className="menuItem" to="/works-on-paper">
              Works on paper
            </NavLink>
            <NavLink className="menuItem" to="/bio">
              Bio
            </NavLink>
            <NavLink className="menuItem" to="/commissions">
              Commissions
            </NavLink>
          </div>
        )
    }

}

export default Menu;