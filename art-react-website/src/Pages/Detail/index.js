import React, { Component, Fragment } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';

import { H1, H2 } from '../../Components/Headers/';
import Button from '../../Components/Button';
import SVG from '../../Components/SVG/';
import Selector from '../../Components/Selector/';
import SelectorImage from '../../Components/Selector/components/image';

import artwork from '../Art/src/images';
import paperWork from '../Paper/src/images';

import './styles.scss';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.piece,
            activeImage: 0,
            featured: this.props.featured,
            type: this.props.type,
        }

        this.getPieceData = this.getPieceData.bind(this)
        this.setActiveImage = this.setActiveImage.bind(this)
    }

    componentWillMount() {
        let name = artwork[this.state.id] ? artwork[this.state.id].name : paperWork[this.state.id] ? paperWork[this.state.id].name : "NOT FOUND"
        document.title = `${name} | Seb Bailey Art`

        this.getPieceData()
    }

    getPieceData() {
        var piece = artwork[this.state.id] ? artwork[this.state.id] : paperWork[this.state.id] ? paperWork[this.state.id] : null
        var details = null;
        if (piece && piece.details) {
            details = piece.details.map(para => {
                return (
                    <p className='details-p'>{para}</p>
                )
            })
        }

        if (piece) {
            this.setState({
                name: piece.name,
                status: piece.status,
                size: piece.size,
                price: piece.price ? piece.price : null,
                medium: piece.medium,
                year: piece.year,
                frame: piece.frame,
                details: details,
                pair: piece.pair,
                image: this.props.type == "ARTWORK" && this.state.id && artwork[this.state.id] && artwork[this.state.id].imgLarge
                    ? require(`../Art/src/images/${this.state.id}/${artwork[this.state.id].imgLarge[0]}`)
                    : this.props.type == "PAPER" && this.state.id && paperWork[this.state.id] && paperWork[this.state.id].imgLarge
                    ? require(`../Paper/src/images/${this.state.id}/${paperWork[this.state.id].imgLarge[0]}`)
                    : null,
                contact: `mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20purchasing%20${piece.name}.`,
                source: this.props.type == "ARTWORK" ? artwork : this.props.type == "PAPER" ? paperWork : [],
            })
        }
    }

    setActiveImage(index) {
        this.setState({
            activeImage: index,
            image: this.state.type == "ARTWORK"
                ? require(`../Art/src/images/${this.state.id}/${this.state.source[this.state.id].imgLarge[index]}`)
                : this.state.type == "PAPER"
                ? require(`../Paper/src/images/${this.state.id}/${this.state.source[this.state.id].imgLarge[index]}`)
                : null
        })
    }

    render() {
        let selectorImages = this.state.type == "ARTWORK" && this.state.source[this.state.id] && this.state.source[this.state.id].imgSmall ? this.state.source[this.state.id].imgSmall.map((imgName, index) => {
            let img = require(`../../Pages/Art/src/images/${this.state.id}/${imgName}`)
            return (
                <SelectorImage
                    key={imgName}
                    src={img}
                    className='selectorImage'
                    index={index}
                    onClick={() => {
                        this.setActiveImage(index)
                    }}
                    active={this.state.activeImage === index}
                />
            )
        }) : this.state.type == "PAPER" && this.state.source[this.state.id] && this.state.source[this.state.id].imgSmall ? this.state.source[this.state.id].imgSmall.map((imgName, index) => {
            let img = require(`../../Pages/Paper/src/images/${this.state.id}/${imgName}`)
            return (
                <SelectorImage
                    key={imgName}
                    src={img}
                    className='selectorImage'
                    index={index}
                    onClick={() => {
                        this.setActiveImage(index)
                    }}
                    active={this.state.activeImage === index}
                />
            )
        }) : null

        return (
            <div className='detailContainer'>
                {this.state.featured ? (
                    <Button href='/' className="back">
                        <SVG className='arrowLeft' id="arrowLeft" width={24} height={24} />
                        Back to featured artwork
                    </Button>
                ) : this.state.type == "ARTWORK" ? (
                    <Button href='../art' className="back">
                        <SVG className='arrowLeft' id="arrowLeft" width={24} height={24} />
                        Back to all artwork
                    </Button>
                ) : this.state.type == "PAPER" ? (
                    <Button href='../works-on-paper' className="back">
                        <SVG className='arrowLeft' id="arrowLeft" width={24} height={24} />
                        Back to works on paper
                    </Button>
                ) : null}
                {(this.state.source[this.state.id] && this.state.source[this.state.id].imgSmall && this.state.source[this.state.id].imgSmall.length > 1) ?
                    (
                        <Selector className='selectorContainer'>
                            {selectorImages}
                        </Selector>
                    ) : null
                }
                <div className='pieceContainer'>
                    <div className="image">
                        <img src={this.state.image} />
                    </div>
                    <div className='details'>
                        <H2>"{this.state.name}"{this.state.size ? ",  " : ""}{this.state.size ? this.state.size : ""}{this.state.year ? ` ${this.state.year}` : ""}</H2>
                        {this.state.price ? (
                            <Fragment>
                                {this.state.status == "UNAVAILABLE" ? (
                                    <h3><s>{this.state.price}</s> SOLD</h3>
                                ) : (
                                    <h3>{this.state.price}</h3>
                                )}
                                <Button
                                    size='SMALL'
                                    href={this.state.contact}
                                    target='_blank'
                                >
                                    Enquire about this artwork
                                </Button>
                            </Fragment>
                            ) : null
                        }
                        {this.state.medium || this.state.frame ? (
                            <div className='extraDetails'>
                                {this.state.medium ? (
                                    <p>{this.state.medium}</p>
                                ) : null}
                                {this.state.frame ? (
                                    <p>{this.state.frame}</p>
                                ) : null}
                                {this.state.pair ? (
                                    <p>Related pieces:<br/> {this.state.pair.map(pair => (
                                        <a href={`../${this.state.type == "ARTWORK" ? ('product') : this.state.type == "PAPER" ? ('works-on-paper') : ''}/${pair}`}>{this.state.source[pair] ? this.state.source[pair].name : null}</a>
                                    ))}</p>
                                ) : null}
                            </div>
                        ) : null}
                        {this.state.details ? (
                            <div className='details-body'>
                                {this.state.details}
                            </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Detail;