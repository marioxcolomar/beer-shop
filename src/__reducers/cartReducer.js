import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../__actions/shopActions'

const initialState = {
	items: []
}

export default function cartReducer(state = initialState, action) {
	switch(action.type) {
		case ADD_TO_CART:
			if (state.items.includes(action.id)) {
				return state
			}
			return Object.assign({}, state, {
				items: [...state.items, action.id]
			})

		case REMOVE_FROM_CART:
			return {}

		default:
			return state
	}
}