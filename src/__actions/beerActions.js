export const FETCH_BEER_BEGIN = 'FETCH_BEER_BEGIN'
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS'
export const FETCH_BEER_FAILURE = 'FETCH_BEER_FAILURE'

export const fetchBeerBegin = () => ({
  type: FETCH_BEER_BEGIN
})

export const fetchBeerSuccess = beers => ({
  type: FETCH_BEER_SUCCESS,
  payload: { beers }
})

export const fetchBeerFailure = error => ({
  type: FETCH_BEER_FAILURE,
  payload: { error }
})

export function fetchBeers() {
  return dispatch => {
    dispatch(fetchBeerBegin())
    return fetch(process.env.REACT_APP_PUNK_BEER_URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBeerSuccess(json.beers))
          return json.beers
      })
      .catch(error => dispatch(fetchBeerFailure(error)))
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}