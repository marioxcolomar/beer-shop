import { combineReducers } from 'redux'

import beers from './beerReducer'
import cart from './cartReducer'
import wishlist from './wishListReducer'

export default combineReducers({
  beers,
  cart,
  wishlist
})