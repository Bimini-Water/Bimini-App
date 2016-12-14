import React, {Component} from 'react';
import {Link} from 'react-router';
import './ProductsPage.css';
import background from './ProductsPage.jpg';
import bottleOne from './bottleOne.svg';
import bottleOneHover from './bottleOneHover.svg';
import bottleTwo from './bottleTwo.svg';
import bottleTwoHover from './bottleTwoHover.svg';
import bottleThree from './bottleThree.svg';
import bottleThreeHover from './bottleThreeHover.svg';
const axios = require('axios');

export default class MyComponent extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/api/hello').then((response) => {
      console.log(response.data);
    })
  }
  render() {
    return (
      <div>
        <div className='productsHeader'>
          <div className='divCenter'>
            <h1><Link to={'/'}>Bimini</Link></h1>
            <h3>Products</h3>
          </div>
          <Link to={'/cart'}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
        </div>
        <div className='productsContent'>
          <img className='background' src={background}/>
          <div className='royale'>
            <img className='bottleOne' src={bottleOne}/>
            <p className='itemName royaleTop royale'>Agua</p>
            <p className='itemName royaleMiddle royale'>de</p>
            <p className='itemName royaleBottom royale'>Royale</p>
            <img className='bottleOneHover' src={bottleOneHover}/>
            <p className='itemPrice gray'>$1/bottle</p>
          </div>
          <hr className='hrOne'/>
          <div className='Serenity'>
            <img className='bottleTwo' src={bottleTwo} />
            <p className='itemName serenityName'>Serenity</p>
            <img className='bottleTwoHover' src={bottleTwoHover} />
            <p className='itemPrice white'>$2/bottle</p>
          </div>
          <hr className='hrTwo'/>
          <div className='vaticanPondWater'>
            <img className='bottleThree' src={bottleThree} />
            <p className='itemName vaticanTop vatican'>Vatican</p>
            <p className='itemName vaticanMiddle vatican'>Pond</p>
            <p className='itemName vaticanBottom vatican'>Water</p>
            <img className='bottleThreeHover' src={bottleThreeHover} />
            <p className='itemPrice blue'>$1000/bottle</p>
          </div>
        </div>
      </div>
    );
  }
}
