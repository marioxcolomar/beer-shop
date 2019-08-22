import React from 'react'

import './styles.scss'

const ShopItem = ({ imgSrc, name, description }) => {
  return (
    <div id='item-card'>
      <img alt={imgSrc} src={imgSrc} />
      <strong>{name}</strong>
      <p>{description}</p>
    </div>
  )
}

export default ShopItem