import React, { Component } from 'react'
import ItemCard from '../ItemCard'
import ShopList from '../ShopList/index'

class Shop extends Component {
  componentDidMount() {
    this.props.beerActions.fetchBeers()
  }

  render() {
    const { beers } = this.props

    return (
      <div className='main-shop'>
        <p>Hello, Beer Shop</p>
        <ShopList>
        {
          beers && beers.map(b => {
            console.log("TCL: Shop -> render -> b", b)
            return (
              <ItemCard
                imgSrc={b.imgSrc}
                name={b.name}
                description={b.description}
              />
            )
          })
        }
        </ShopList>
      </div>
    )
  }
}

export default Shop