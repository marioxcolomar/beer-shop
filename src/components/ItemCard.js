import React from 'react'

const ItemCard = ({ imgSrc, name, description }) => {
  return (
    <div id='item-card'>
      <div className='img' style={{ backgroundImage: `${imgSrc}` }}></div>
      <strong>{name}</strong>
      <p>{description}</p>
    </div>
  )
}

export default ItemCard