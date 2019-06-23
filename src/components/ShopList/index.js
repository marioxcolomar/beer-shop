import React from 'react'

const ShopList = ({ title, children }) => {
  return (
    <div className='shop-list'>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default ShopList