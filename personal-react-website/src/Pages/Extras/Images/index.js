import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Masonry from '../../../Components/Masonry/';
import Card from '../../../Components/Card/';
import Image from '../../../Components/Image/';
import LightBox, { LightBoxGroup } from '../../../Components/LightBox/'
import InfoList from '../../../Components/InfoList/';
import SVG from '../../../Components/SVG/';

import list from '../list';

import {masonrySizes} from '../../../helpers/breakpoints';
import styles from './styles.css';

class Images extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.loaded = 0

    this.getOtherExtras = this.getOtherExtras.bind(this)
    this.getImages = this.getImages.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
    this.handleLightBoxClick = this.handleLightBoxClick.bind(this)
    this.handleCloseLightbox = this.handleCloseLightbox.bind(this)

  }

  componentWillMount() {
    let {title, next, prev} = this.getOtherExtras(this.props)
    document.title = `Sebatian Bailey | ${title}`
    let {cards, lightBoxContent} = this.getImages(this.props)
    this.setState({title: title, next: next, prev: prev, cards: cards, lightBoxContent: lightBoxContent})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      let {title, next, prev} = this.getOtherExtras(nextProps)
      document.title = `Sebatian Bailey | ${title}`
      let {cards, lightBoxContent} = this.getImages(nextProps)
      this.setState({title: title, next: next, prev: prev, cards: cards, lightBoxContent: lightBoxContent})
    }
  }

  getOtherExtras(props) {

    let thisItem = list.filter((extra) => {
      return extra.type == props.id
    })
    thisItem = thisItem[0] ? thisItem[0] : undefined

    let thisIndex = list.indexOf(thisItem)

    let title = thisItem ? thisItem.title : null
    let prev = list[thisIndex - 1] ? list[thisIndex - 1] : list[list.length - 1]
    let next = list[thisIndex + 1] ? list[thisIndex + 1] : list[0]
    
    return({title: title, next: next, prev: prev})

  }

  getImages(props) {

    let extra = list.filter((obj) => {
      return obj.type == props.id
    })[0]

    let content = extra ? extra.images.map((imgName, index) => {
      let imagePath = `Pages/Extras/src/${props.id}/${imgName}/`
      return(
        <LightBox
          key={`lightbox-${index}-${props.id}`}
          index={index}
          onClick={this.handleLightBoxClick}
        >
          <Image
            name={imgName}
            path={imagePath}
            sizes={masonrySizes}
            onLoad={this.handleImageLoad}
            className={styles.image}
          />
        </LightBox>
      )
    }) : null

    let lightBoxContent = extra ? extra.images.map((imgName, index) => {
      let imagePath = `Pages/Extras/src/${props.id}/${imgName}/`
      return(
        <Image
          key={`image-${index}-${props.id}`}
          index={index}
          name={imgName}
          path={imagePath}
        />
      )
    }) : null

    let cards = content ? content.map((lightbox, index) => {
      return(
        <Card
          key={`card-${index}-${props.id}`}
          id={`card-${index}`}
        >
          {lightbox}
        </Card>
      )
    }) : null

    return({cards: cards, lightBoxContent: lightBoxContent})

  }

  handleImageLoad() {
    this.loaded += 1
    if (this.state.images && this.loaded == this.state.images.length - 1) {
      this.setState({ masonryContentsLoaded: true })
      this.masonry.renderColumns()
      if (this.props.onLoad) {
        this.props.onLoad()
      }
    }
  }

  handleLightBoxClick(lightbox, index) {
    this.setState({
      currentLightBox: this.state.lightBoxContent[index]
    })
  }

  handleCloseLightbox() {
    this.setState({
      currentLightBox: undefined
    })
  }

  render() {

    let prevLink = `/extras/${this.state.prev.type}`
    let nextLink = `/extras/${this.state.next.type}`

    return(
      <div className={styles.container}>
        <ul
          ref={(elem) => {this.topNav = elem}}
          className={`${styles.navList} ${styles.top}`}
        >
          <Link to={prevLink}>
            <li>
              <SVG className={styles.arrowLeft} id="arrowLeft" width={24} height={24} />
              {this.state.prev.title}
            </li>
          </Link>
          <li className={styles.navTitle}>{this.state.title}</li>
          <Link to={nextLink}>
            <li>
              {this.state.next.title}
              <SVG className={styles.arrowRight} id="arrowRight" width={24} height={24} />
            </li>
          </Link>
        </ul>
        <LightBoxGroup
          current={this.state.currentLightBox}
          contents={this.state.lightBoxContent}
          onClose={this.handleCloseLightbox}
        />
        <Masonry
          ref={(elem) => this.masonry = elem}
          minWidth={400}
          margin={16}
          loaded={this.state.masonryContentsLoaded}
        >
          {this.state.cards}
        </Masonry>
        <ul
          ref={(elem) => {this.bottomNav = elem}}
          className={`${styles.navList} ${styles.bottom}`}
        >
          <Link to={prevLink}>
            <li className={styles.prev}>
              <SVG className={styles.arrowLeft} id="arrowLeft" width={24} height={24} />
              {this.state.prev.title}
            </li>
          </Link>
          <Link to={nextLink}>
            <li className={styles.next}>
              {this.state.next.title}
              <SVG className={styles.arrowRight} id="arrowRight" width={24} height={24} />
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Images