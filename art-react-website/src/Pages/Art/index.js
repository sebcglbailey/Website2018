import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { H1, H2 } from '../../Components/Headers/';
import Button from '../../Components/Button';
import Hero from '../../Components/Hero';

import images from './src/images';

import './styles.scss';

class Art extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: 6
        }

        this.renderImages = this.renderImages.bind(this)
    }

    componentWillMount() {
        document.title = "Seb Bailey Art"
        this.renderImages()
    }

    renderImages() {
        this.forSale = []
        this.unavailable = []
        this.commissions = []

        for (let id in images) {

            var piece = images[id]

            var image = require(`./src/images/${id}/${piece.imgSmall[0]}`)

            var price = piece.price ? (<p>{piece.price}</p>) : null

            var imageNode = (
                <Link
                    to={`./${id}`}
                    className='imageLink'
                    key={`image-${piece.name.split(' ').join().toLowerCase()}`}
                >
                    <div className='image'>
                        <img className='background'
                            src={image}
                        />
                        <img className='foreground'
                            src={image}
                        />
                    </div>
                    <h4>{piece.name}{piece.size ? ",  " : ""}{piece.size ? piece.size : ""}</h4>
                        {price ? price : null}
                </Link>
            )

            switch (piece.status) {
                case "FOR_SALE":
                    this.forSale.push(imageNode);
                    break;
                case "UNAVAILABLE":
                    this.unavailable.push(imageNode);
                    break;
                case "COMMISSION":
                    this.commissions.push(imageNode);
                    break;
                default:
                    continue;
            }
        }
    }

    render() {
        return (
            <Fragment>
                <Hero background={'sarasa'} />
                <div className='artContainer'>
                    <H2>For sale</H2>
                    <div className='artDisplay'>
                        <div className='content'>
                            {this.forSale}
                        </div>
                    </div>
                    <Button
                        href="mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20purchasing%20some%20of%20your%20artwork."
                    >
                        Get in touch
                    </Button>
                    <H2>Currently unavailable</H2>
                    <div className='artDisplay'>
                        <div className='content'>
                            {this.unavailable}
                        </div>
                    </div>
                    <H2>Commissions</H2>
                    <div className='artDisplay'>
                        <div className='content'>
                            {this.commissions}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Art;