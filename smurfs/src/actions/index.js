import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


// action creator
export const fetchSmurfs = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      'http://localhost:3333/smurfs'
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};


export const SAVE_SMURF = 'SAVE_SMURF';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAILURE = 'SAVE_FAILURE';

export const postData = (newSmurf) => (dispatch) => {
    dispatch({type: SAVE_SMURF})
    axios
    .post('http://localhost:3333/smurfs', newSmurf) 
    .then(res => dispatch({type: SAVE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: SAVE_FAILURE, payload: err.response}))
}