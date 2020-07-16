import React, { Component } from 'react';
import { render } from 'react-dom';

import styles from './styles.css';

class DeviceSize extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.windowResize = this.windowResize.bind(this)
    }

    componentWillMount() {
        window.addEventListener("resize", this.windowResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowResize)
    }

    windowResize() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <h2>Device size:</h2>
                <p>{this.state.width} x {this.state.height}</p>
            </div>

        )
    }
}

export default DeviceSize;
