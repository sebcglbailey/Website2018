import React, { Component, Fragment } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';

import { H1, H2 } from '../../Components/Headers/';
import Button from '../../Components/Button';
import SVG from '../../Components/SVG/';

import images from '../Art/src/images';
import status from '../Art/src/status';

import './styles.scss';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.piece
        }

        this.getPieceData = this.getPieceData.bind(this)
    }

    componentWillMount() {
        let name = images[this.state.id] ? images[this.state.id].name : "NOT FOUND"
        document.title = `Seb Bailey Art | ${name}`

        this.getPieceData()
    }

    getPieceData() {
        var piece = images[this.state.id]
        var details = null;
        if (piece.details) {
            details = piece.details.map(para => {
                return (
                    <p className='details-p'>{para}</p>
                )
            })
        }

        this.setState({
            name: piece.name,
            status: piece.status,
            size: piece.size,
            price: piece.price ? piece.price : null,
            medium: piece.medium,
            year: piece.year,
            frame: piece.frame,
            details: details,
            image: require(`../Art/src/images/${images[this.state.id].imgLarge}`),
            contact: `mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20purchasing%20${piece.name}.`
        })
    }

    render() {
        return (
            <div className='detailContainer'>
                <Link to='../'>
                    <Button className="back">
                        <SVG className='arrowLeft' id="arrowLeft" width={24} height={24} />
                        Back to all artwork
                    </Button>
                </Link>
                <div className='pieceContainer'>
                    <img className='image' src={this.state.image} />
                    <div className='details'>
                        <H2>"{this.state.name}"{this.state.size ? ",  " : ""}{this.state.size ? this.state.size : ""}{this.state.year ? ` ${this.state.year}` : ""}</H2>
                        {this.state.price ? (
                            <Fragment>
                                <h3>{this.state.price}</h3>
                                <Button
                                    size='SMALL'
                                    href={this.state.contact}
                                >
                                    Enquire about this piece
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