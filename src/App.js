import React from 'react';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
// import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {
  // function componentDidMount(){}
  return (
    <div className="App">
      <h1> Catch - Tracker </h1>
      <Login/>
      <Home/>
    </div>
  );
}

export default App;
