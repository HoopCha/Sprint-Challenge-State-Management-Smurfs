import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, SAVE_SMURF, SAVE_SUCCESS, SAVE_FAILURE } from '../actions';

const initialState = {
  smurfs: [
    {
        name: '',
        age: 0,
        height: '',
        id: 0
    }
],
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
    case SAVE_SMURF:
        return {
            ...state,
            loading: true,
            error: ''
        }
    case SAVE_SUCCESS: 
        return {
            ...state,
            loading: false,
            smurfData: action.payload,
            error: ''
        }
    case SAVE_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    default:
      return state;
  }
};

export default reducer;