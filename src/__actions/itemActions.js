export const INCREMENT_ITEM = 'INCREMENT_ITEM'

export const increaseItem = id => {
  return {
    type: INCREMENT_ITEM,
    id
  }
}

export const DECREMENT_ITEM = 'DECREMENT_ITEM'

export const decreaseItem = id => {
  return {
    type: DECREMENT_ITEM,
    id
  }
}
