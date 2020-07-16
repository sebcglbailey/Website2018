import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import styles from './styles.css';

const DeviceSize = () => {

    const size = useCurrentSize();
    console.log(size)

    return (
        <div className={styles.container}>
            <h2>Window size:</h2>
            <p>{size.innerWidth} x {size.innerHeight}</p>
            <h2>Screen size:</h2>
            <p>{size.fullWidth} x {size.fullHeight}</p>
        </div>

    )
}

// Hook
const getFullWidth = () => window.outerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
const getFullHeight = () => window.outerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
const getInnerWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
const getInnerHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

function useCurrentSize() {
    // save current window width in the state object
    let [fullWidth, setFullWidth] = useState(getFullWidth());
    let [fullHeight, setFullHeight] = useState(getFullHeight());
    let [innerWidth, setInnerWidth] = useState(getInnerWidth());
    let [innerHeight, setInnerHeight] = useState(getInnerHeight());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        const resizeListener = () => {
            // change size from the state object
            setFullWidth(getFullWidth())
            setFullHeight(getFullHeight())
            setInnerWidth(getInnerWidth())
            setInnerHeight(getInnerHeight())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return { innerWidth, innerHeight, fullWidth, fullHeight };
}

export default DeviceSize;
