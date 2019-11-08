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

export const ADD_SMURF = 'ADD_SMURFS';

export const postSmurf = smurf => dispatch => {
  return (
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => dispatch({type:ADD_SMURF, payload:res}))
      .catch(err => console.log('Try again! Error: ', err))
  )
}

export const REMOVE_SMURF = 'REMOVE_SMURF';

export const deleteSmurf = id => dispatch => {
  return (
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => dispatch({type:REMOVE_SMURF}))
      .catch(err => console.log(err))
  )
}