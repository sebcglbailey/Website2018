import React, { Component, Fragment } from 'react';

import { H1, H2 } from '../../Components/Headers/';
import Button from '../../Components/Button';
import SVG from '../../Components/SVG/';
import Selector from '../../Components/Selector/';
import SelectorImage from '../../Components/Selector/components/image';
import Menu from '../../Components/Menu/';
import Hero from '../../Components/Hero/';

import bioImages from './images';
import images from '../Art/src/images';

import './styles.scss';

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
          images: [],
          contact: `mailto:sebcglbailey@gmail.com?subject=Artwork%20Enquiry&body=I%27d%20love%20to%20talk%20about%20a%20commission%20.`
        }

    }

    componentWillMount() {
      document.title = "Biography | Seb Bailey Art"
      let imageArray = bioImages.images.map(imageName => {
        let image = require(`../Art/src/images/${imageName}/${images[imageName].imgLarge[0]}`)
        return (
          <img src={image} />
        )
      })

      this.setState({
        images: imageArray
      })
    }

    render() {
      let artistPhoto = require('./seb_painting.jpeg');
      return (
        <Fragment>
          <Hero size='SMALL' background='flos_in_mari'>
            <H1>Biography</H1>
          </Hero>
          <div className="bioContainer">
            <Menu />
            <div className="bio">
              <div className="text">
                <p>Seb Bailey is a self-taught abstract artist, working out of his home studio in South London.</p>
                <p>Having studied Architecture at University, and continuing into a career in Digital Product Design, Seb has a wide array of creative inspiration. It all culminates into a skill that helps him to create art that you want to touch and be a part of.</p>
                <p>The texture in Seb's pieces speaks to the landscapes and architecture that surrounds him in his home town of London, while the colour found in so many of the pieces aims to be a deliberate juxtaposition of the monotone and repetetive nature of so many digital products today.</p>
                <p>Seb is continuously experimenting and creating new pieces for sale and private collection, and is open to private and commercial commissions.</p>
                <Button
                    size='SMALL'
                    href={this.state.contact}
                    target='_blank'
                >
                    Enquire about commissions
                </Button>
              </div>
              <div className="images">
                {/* {this.state.images} */}
                <img src={artistPhoto} />
              </div>
            </div>
          </div>
        </Fragment>
      )
    }

}

export default Bio;