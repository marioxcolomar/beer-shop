import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

import "./styles.scss";

const ShopItem = ({ beerId, imgSrc, name, price, shopActions }) => {
	const { addToCart, addToWhislist } = shopActions
	return (
		<div id="item-card">
			<img alt={imgSrc} src={imgSrc} />
			<h3>{name.length > 15 ? name.substring(0, 15).concat("...") : name}</h3>
			<p>
				<i>$ {price}</i>
			</p>
			<button type="button" onClick={() => addToCart(beerId)}>
				<FaCartPlus />
			</button>
			<button type="button" onClick={() => addToWhislist(beerId)} style={{ backgroundColor: "#CD5C5C" }}>
				<MdFavorite />
			</button>
		</div>
	);
};

export default ShopItem;
