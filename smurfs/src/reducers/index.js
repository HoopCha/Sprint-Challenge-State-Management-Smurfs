import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, REMOVE_SMURF } from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
      case ADD_SMURF:
        return {
          ...state, 
        }
      case REMOVE_SMURF:
        return {
          ...state,
        }
    default:
      return state;
  }
};

export default reducer;