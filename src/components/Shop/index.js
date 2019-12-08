import React, { Component } from 'react'
import ShopItem from '../ShopItem'
import ShopList from '../ShopList/index'

class Shop extends Component {
	componentDidMount() {
		this.props.beerActions.fetchBeers()
	}

	render() {
		const { beers } = this.props

		return (
			<div className='main-shop'>
				<div className="wrapper">
					<p>Hello, Beer Shop</p>
					<ShopList>
						{
							beers && beers.map((b, i) => {
								return (
									<ShopItem
										key={i}
										imgSrc={b.image_url}
										name={b.name}
										price={b.price}
									/>
								)
							})
						}
					</ShopList>
				</div>
			</div>
		)
	}
}

export default Shop