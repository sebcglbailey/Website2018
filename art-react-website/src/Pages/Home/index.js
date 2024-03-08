import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { H2 } from '../../Components/Headers';
import Button from '../../Components/Button';
import Hero from '../../Components/Hero';
import Menu from '../../Components/Menu';

import featured from './src/featured';

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
        this.featured =[];

        for (let id in featured) {

            var piece = featured[id]

            var image = require(`../Art/src/images/${id}/${piece.imgSmall[0]}`)

            var price = piece.price ? (<p>{piece.price}</p>) : null

            var forSale = piece.status == "FOR_SALE" ? true : false;
            var commission = piece.status == "COMMISSION" ? true : false;
            var unavailable = piece.status == "UNAVAILABLE" ? true : false;

            var imageNode = (
                <Link
                    to={`./featured/${id}`}
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
                        {price && forSale ? price : null}
                        {price && commission ? price : null}
                        {price && unavailable ? (
                            <span><s>{price}</s> SOLD</span>
                        ) : null}
                </Link>
            )

            this.featured.push(imageNode);
        }
    }

    render() {
        return (
            <Fragment>
                <Hero background={'attakai_uzu'} />
                <div className='artContainer'>
                    <Menu />
                    <H2>Featured</H2>
                    <div className='artDisplay'>
                        <div className='content'>
                            {this.featured}
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <Button
                            href="mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20purchasing%20some%20of%20your%20artwork."
                            target='_blank'
                        >
                            Get in touch
                        </Button>
                        <Button
                            href='https://instagram.com/sebbaileyart'
                            className='instagram'
                            target='_blank'
                            variant='SECONDARY'
                        >
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path id="Color" fill-rule="evenodd" clip-rule="evenodd" d="M18.3283 27.9575H13.6717C12.403 27.9521 11.92 27.935 11.04 27.88C9.76 27.84 8.92 27.64 8.12 27.32C7.36 27.04 6.68 26.6 6 25.96C5.36 25.28 4.92 24.6 4.64 23.84C4.32 23.04 4.12 22.2 4.08 20.92C4.025 20.04 4.00781 19.557 4.00244 18.2882V13.6317C4.00781 12.3629 4.025 11.88 4.08 11C4.12 9.71996 4.32 8.87996 4.64 8.07996C4.92 7.31996 5.36 6.63996 6 5.95996C6.68 5.31996 7.36 4.87996 8.12 4.59996C8.92 4.27996 9.76 4.07996 11.04 4.03996C12.32 3.95996 12.76 3.95996 16 3.95996C19.24 3.95996 19.68 3.95996 20.96 4.03996C22.24 4.07996 23.08 4.27996 23.88 4.59996C24.64 4.87996 25.32 5.31996 26 5.95996C26.64 6.63996 27.08 7.31996 27.36 8.07996C27.68 8.87996 27.88 9.71996 27.92 11C28 12.28 28 12.72 28 15.96C28 19.2 28 19.64 27.92 20.92C27.88 22.2 27.68 23.04 27.36 23.84C27.08 24.6 26.64 25.28 26 25.96C25.32 26.6 24.64 27.04 23.88 27.32C23.08 27.64 22.24 27.84 20.96 27.88C20.08 27.935 19.597 27.9521 18.3283 27.9575ZM18.2908 25.7975C19.532 25.7921 19.9875 25.775 20.84 25.72C22 25.68 22.64 25.48 23.08 25.32C23.64 25.08 24.04 24.84 24.44 24.4L24.6816 24.1587C24.976 23.8336 25.168 23.488 25.36 23.04C25.52 22.6 25.72 21.96 25.76 20.8C25.84 19.56 25.84 19.16 25.84 15.96C25.84 12.76 25.84 12.36 25.76 11.12C25.72 9.95996 25.52 9.31996 25.36 8.87996C25.12 8.31996 24.88 7.91996 24.44 7.51996C24.04 7.07996 23.64 6.83996 23.08 6.59996C22.64 6.43996 22 6.23996 20.84 6.19996C19.6 6.11996 19.2 6.11996 16 6.11996C12.8 6.11996 12.4 6.11996 11.16 6.19996C10 6.23996 9.36 6.43996 8.92 6.59996C8.36 6.83996 7.96 7.07996 7.56 7.51996L7.3184 7.76124C7.024 8.08636 6.832 8.43196 6.64 8.87996C6.48 9.31996 6.28 9.95996 6.24 11.12C6.185 11.9725 6.16781 12.4279 6.16244 13.6692V18.2507C6.16781 19.492 6.185 19.9475 6.24 20.8C6.28 21.96 6.48 22.6 6.64 23.04C6.88 23.6 7.12 24 7.56 24.4C7.96 24.84 8.36 25.08 8.92 25.32C9.36 25.48 10 25.68 11.16 25.72C12.0125 25.775 12.468 25.7921 13.7092 25.7975H18.2908ZM22.4 11C21.6 11 20.96 10.32 20.96 9.55996C20.96 8.75996 21.6 8.11996 22.4 8.11996C23.2 8.11996 23.84 8.75996 23.84 9.55996C23.84 10.32 23.2 11 22.4 11ZM15.96 22.16C12.56 22.16 9.8 19.4 9.8 16C9.8 12.56 12.56 9.79996 15.96 9.79996C19.36 9.79996 22.12 12.56 22.12 16C22.12 19.4 19.36 22.16 15.96 22.16ZM15.96 20C18.2 20 19.96 18.2 19.96 16C19.96 13.76 18.2 12 15.96 12C13.76 12 11.96 13.76 11.96 16C11.96 18.2 13.76 20 15.96 20Z"/>
                                </g>
                            </svg>
                            @sebbaileyart
                        </Button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Art;