import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE
} from '../__actions/beerActions'

const initialState = {
  beers: [],
  loading: false,
  error: null,
}

export default function shopReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BEERS_BEGIN:
    return {
       ...state,
       loading: true,
       error: null
     };

     case FETCH_BEERS_SUCCESS:
     console.log('ACTION BEER SUCCESS', action)
      return {
        ...state,
        loading: false,
        beers: action.payload.beers
      };

     case FETCH_BEERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        beers: []
      };

      default:
        return state;
  }
}