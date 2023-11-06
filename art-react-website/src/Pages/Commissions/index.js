import React, { Component, Fragment } from 'react';

import { H1, H2 } from '../../Components/Headers';
import Button from '../../Components/Button';
import SVG from '../../Components/SVG';
import Selector from '../../Components/Selector';
import SelectorImage from '../../Components/Selector/components/image';
import Menu from '../../Components/Menu';
import Hero from '../../Components/Hero';

import images from '../Art/src/images';

import './styles.scss';

class Commissions extends Component {
    constructor(props) {
        super(props);

        this.state = {
          contact: `mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20a%20commission%20.`
        }

    }

    componentWillMount() {
      document.title = "Commissions | Seb Bailey Art"
    }

    render() {
      return (
        <Fragment>
          <Hero size='SMALL' background='perdita'>
            <H1>Commissions</H1>
          </Hero>
          <div className="comContainer">
            <Menu />
            <div className='comms'>
              <p>I am currently available for private commissions.</p>
              <p>I will work with you to find out exactly what you need by looking at the space that you want your painting, discussing and matching any colour scheme that you are interested in, and figuring out the style in which to create your new statement piece for your home or business.</p>
              <h4>Typical pricing for a commission based on size:</h4>
              <span>(This is subject to change based on materials used and framing options)</span>
              <ul>
                <li>60x60cm (minimum size) : <b>£500</b></li>
                <li>90x90cm : <b>£1,050</b></li>
                <li>100x100cm : <b>£1,260</b></li>
                <li>122x91cm : <b>£1,390</b></li>
                <li>122x122cm : <b>£1,760</b></li>
                <li>152x102cm : <b>£1,820</b></li>
                <li>183x122cm : <b>£2,370</b></li>
              </ul>
              <Button
                    size='SMALL'
                    href={this.state.contact}
                    target='_blank'
                >
                    Enquire about commissions
                </Button>
            </div>
          </div>
        </Fragment>
      )
    }

}

export default Commissions;