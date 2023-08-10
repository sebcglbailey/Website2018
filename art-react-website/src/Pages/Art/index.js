import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContentContainer from '../../Components/ContentContainer';
import { H1, H2 } from '../../Components/Headers/';
import Image from '../../Components/Image';

import images from './src/images.json';

import styles from './styles.css';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: 6
        }

        this.renderImages = this.renderImages.bind(this)
    }

    componentWillMount() {
        document.title = "Seb Bailey Art"
        this.forSale = this.renderImages(images.forSale)
        this.sold = this.renderImages(images.sold)
    }

    renderImages(arr) {
        var images = arr.map((imageObj) => {
            var image = require(`./src/images/${imageObj.imgSmall}`)
            return (
                <div
                    key={`image-${imageObj.name.split(' ').join().toLowerCase()}`}
                    className={styles.image}>
                    <img
                        src={image}
                    />
                    <h4>{imageObj.name}{imageObj.size ? "  •  " : ""}{imageObj.size ? imageObj.size : ""}</h4>
                </div>
            )
        })
        return images
    }

    render() {
        return (
            <div className={styles.container}>
                <H1>Seb Bailey Art</H1>
                <H2>For Sale</H2>
                <div className={styles.carousel}>
                    <div className={styles.content}>
                        {this.forSale}
                    </div>
                </div>
                <button
                    className={styles.contactButton}
                    href="mailto:sebcglbailey@gmail.com?subject=Artwork&20Enquiry&body=I&27d&20love&20to&20talk&20about&20purchasing&20some&20of&20your&20artwork."
                >
                    Get in touch
                </button>
                <H2>Unavailable</H2>
                <div className={styles.carousel}>
                    <div className={styles.content}>
                        {this.sold}
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact;