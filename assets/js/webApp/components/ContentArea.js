import React, { Component} from 'react'

export default class ContentArea extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <section id={'content-area'}>
        <div className={'col-md-6 model'}>
          <img src={'/img/bape2.png'}/>
        </div>
        <div className={'col-md-6 info'}>
          <div className={'insider'}>
            <h5>Mens</h5>
            <h1>Hooded Jacket</h1>
            <p>Schlitz occupy vexillologist hashtag post-ironic paleo tumblr mumblecore chia. Tumblr celiac art party drinking vinegar meh, PBR&B chartreuse marfa heirloom single-origin coffee retro lyft schlitz. Edison bulb church-key twee pickled shoreditch vape austin. Locavore tbh activated charcoal migas scenester direct trade food truck vaporware dreamcatcher celiac crucifix sartorial waistcoat microdosing. Pour-over snackwave activated charcoal occupy, tote bag hexagon ramps fashion axe before they sold out meggings. Williamsburg jean shorts cronut tote bag, pickled bitters hammock cred blue bottle taiyaki. Next level brunch shoreditch beard celiac.</p>
            <div className={'size'}>
              <div className={'title'}>
                size
              </div>
              <ul className={'sizes'}>
                <li className={'circle'}>S</li>
                <li className={'circle'}>M</li>
                <li className={'circle'}>L</li>
                <li className={'semi-circle'}>XL</li>
                <li className={'semi-circle'}>XXL</li>
                <li className={'semi-circle'}>CUSTOM</li>
              </ul>
            </div>
            <div className={'action-btns'}>
              <a className={'col-md-6 red-hollow-btn'}>
                <span className={'price'}>
                  $495
                </span>
                add to cart
              </a>
              <a className={'col-md-6 lightgrey-btn'}>
                find a store
              </a>
            </div>
          </div>
        </div>
      </section>)
  }
}
