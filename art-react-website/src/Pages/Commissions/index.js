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
          <Hero size='SMALL' background='in_agria'>
            <H1>Commissions</H1>
          </Hero>
          <div className="comContainer">
            <Menu />
            <div className='comms'>
              <p>I am currently available for private and commercial commissions.</p>
              <p>I will work with you to find out exactly what you need by looking at the space that you want your painting, discussing and matching any colour scheme that you are interested in, and figuring out the style in which to create your new statement piece for your home or business.</p>
              <h3>How much does a commission cost?</h3>
              <p>This question is a difficult one to answer, as it depends on a number of factors, but I have outlined some example costs below based on a typical size canvas. Typically, you can expect to spend 10-20% more than "off the wall" prices due to increased time and effort to find the perfect painting for your space.</p>
              <p>The below estimates are a minimum I would charge for the size canvas, and this does not include framing. Prices are subject to increase depending on the complexity of the project, and materials used.</p>
              <h4>Typical pricing for a private commission based on size:</h4>
              <ul>
                <li>60x60cm (minimum size) : <b>£550</b></li>
                <li>90x90cm : <b>£1,150</b></li>
                <li>100x100cm : <b>£1,400</b></li>
                <li>120x90cm : <b>£1,500</b></li>
                <li>150x100cm : <b>£1,950</b></li>
                <li>200x140cm : <b>£3,000</b></li>
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