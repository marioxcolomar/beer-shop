import {
	ADD_TO_WISHLIST,
	REMOVE_FROM_WISHLIST
} from '../__actions/shopActions';

const initialState = {
	items: []
};

export default function wishListReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_WISHLIST:
			if (state.items.includes(action.id)) {
				return state;
			}
			return Object.assign({}, state, {
				items: [...state.items, action.id]
			});

		case REMOVE_FROM_WISHLIST:
			return {};

		default:
			return state;
	}
}
