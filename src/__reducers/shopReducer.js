import {
  FETCH_BEER_BEGIN,
  FETCH_BEER_SUCCESS,
  FETCH_BEER_FAILURE
} from '../__actions/beerActions'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function shopReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BEER_BEGIN:
     return {
       ...state,
       loading: true,
       error: null
     };

     case FETCH_BEER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.beers
      };

     case FETCH_BEER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: []
      };

      default:
        return state;
  }
}