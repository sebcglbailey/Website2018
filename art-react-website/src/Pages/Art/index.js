import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { H1, H2 } from '../../Components/Headers/';

import images from './src/images.json';

import './styles.scss';

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

            var price = imageObj.price ? (<p>{imageObj.price}</p>) : null

            return (
                <div
                    key={`image-${imageObj.name.split(' ').join().toLowerCase()}`}
                    className='image'>
                    <img
                        src={image}
                    />
                    <h4>{imageObj.name}{imageObj.size ? ",  " : ""}{imageObj.size ? imageObj.size : ""}</h4>
                    {price ? price : null}
                </div>
            )
        })
        return images
    }

    render() {
        return (
            <div className='container'>
                <H1>Seb Bailey Art</H1>
                <H2>For sale</H2>
                <div className='carousel'>
                    <div className='content'>
                        {this.forSale}
                    </div>
                </div>
                <a
                    className='contact'
                    href="mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20purchasing%20some%20of%20your%20artwork."
                >
                    Get in touch
                </a>
                <H2>Currently unavailable</H2>
                <div className='carousel'>
                    <div className='content'>
                        {this.sold}
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact;