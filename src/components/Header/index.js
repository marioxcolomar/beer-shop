import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

import './styles.scss';

const Header = ({ cart, wishlist }) => {
	return (
		<div className='header'>
			<div className='wrapper'>
				<FaShoppingCart />
				<span className='cart-qty'>{cart.items.length > 0 ? cart.items.length : null}</span>
				<MdFavorite />
				<span className='cart-qty'>{wishlist.items.length > 0 ? wishlist.items.length : null}</span>
			</div>
		</div>
	);
};

export default Header;
