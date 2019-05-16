export const FETCH_BEERS_BEGIN = 'FETCH_BEERS_BEGIN'
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS'
export const FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE'

export const fetchBeersBegin = () => ({
  type: FETCH_BEERS_BEGIN
})

export const fetchBeersSuccess = beers => ({
  type: FETCH_BEERS_SUCCESS,
  payload: { beers }
})

export const fetchBeersFailure = error => ({
  type: FETCH_BEERS_FAILURE,
  payload: { error }
})

export function fetchBeers() {
  return dispatch => {
    dispatch(fetchBeersBegin())
    return fetch(process.env.REACT_APP_PUNK_BEER_URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBeersSuccess(json))
          return json
      })
      .catch(error => dispatch(fetchBeersFailure(error)))
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}