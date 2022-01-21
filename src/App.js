import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurfs } from "./actions";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
  useEffect(() => {
    props.fetchSmurfs();
  },[])
  useEffect(() => {
    props.addSmurfs();
  },[])

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
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

export default connect(mapStateToProps, {fetchSmurfs, addSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.