import React, { Component } from 'react'

import './styles.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="menuContainer">
            <a className="menuItem" href="/">
              Home
            </a>
            <a className="menuItem" href="/art">
              Artwork
            </a>
            <a className="menuItem" href="/bio">
              Bio
            </a>
          </div>
        )
    }

}

export default Menu;