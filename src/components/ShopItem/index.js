import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'

import './styles.scss'

const ShopItem = ({ imgSrc, name, description }) => {
	return (
		<div id='item-card'>
			<img alt={imgSrc} src={imgSrc} />
			<h3>{name}</h3>
			<p><i>price</i></p>
			<button type="button" ><FaCartPlus /></button>
			<button type="button" style={{ backgroundColor: '#CD5C5C' }} ><MdFavorite /></button>
		</div>
	)
}

export default ShopItem