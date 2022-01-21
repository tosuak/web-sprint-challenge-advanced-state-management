import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from "./actions";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
  useEffect(() => {
    props.fetchSmurfs();
  },[])

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    {/* {props.error && <h1>{props.error}</h1>}
    {props.loading && <h1>...Is loading</h1>}  */}
    </div>
    
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.