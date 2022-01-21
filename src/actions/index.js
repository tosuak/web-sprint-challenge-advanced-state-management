import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const POST_ERROR = 'POST_ERROR';
export const ADD_DATA = 'ADD_DATA';
export const ERROR_VALUE = 'ERROR_VALUE';

export const fetchSmurfs = () => dispatch => {
  dispatch(loading());
  axios.get('http://localhost:3333/smurfs')
  .then(resp => {
    dispatch(success(resp.data))
  })
  .catch(err => {
    dispatch(fetchError(err.message))
  })
}

export const addSmurfs = smurf => dispatch => {
  axios.post('http://localhost:3333/smurfs', {smurf})
  .then(resp => {
    dispatch(success(resp.data))
  })
  .catch(err => {
    dispatch(postError(err.message))
    dispatch(errorValue(err.response.data.Error))
  })
}

const errorValue = value => {
  return {type:ERROR_VALUE, payload: value}
}


const loading = () => {
  return {type: FETCH_LOADING};
} 

const success = data => {
  return {type: FETCH_SUCCESS, payload: data};
}

const fetchError = message => {
  return {type: FETCH_ERROR, payload: message};
}

const postError = message => {
  return {type: POST_ERROR, payload: message};
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.