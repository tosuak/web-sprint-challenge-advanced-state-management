import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const POST_ERROR = 'POST_ERROR';
export const ADD_DATA = 'ADD_DATA';

export const fetchSmurfs = smurf => dispatch => {
  dispatch(loading());
  axios.get('http://localhost:3333/smurfs')
  .then(resp => {
    console.log(resp)
    dispatch(success(resp.data))
  })
  .catch(err => {
    dispatch(fetchError(err))
  })
  axios.post('http://localhost:3333/smurfs', smurf)
  .then(resp => {
    dispatch(addSmurf([resp.body]))
  })
  .catch(err => {
    dispatch(postError(err))
  })
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

const addSmurf = smurf => {
  return {type:ADD_DATA, payload: smurf};
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.