export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'

export const addToWhislist = id => {
  return {
    type: ADD_TO_WISHLIST,
    id
  }
}

export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export const removeFromWishlist = id => {
  return {
    type: REMOVE_FROM_WISHLIST,
    id
  }
}