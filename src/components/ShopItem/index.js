import React from 'react'

import './styles.scss'

const ShopItem = ({ imgSrc, name, description }) => {
  return (
    <div id='item-card'>
      <img alt={imgSrc} src={imgSrc} />
      <h3>{name}</h3>
    </div>
  )
}

export default ShopItem