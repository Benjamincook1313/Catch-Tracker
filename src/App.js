import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
// import axios from 'axios';
import MyCatch from './Components/MyCatch'

class App extends Component{
  constructor(){
    super()
    this.state = {
      loggedIn: 'false',
    }
  }
  
  toggleLogin=()=>{
    this.setState = {
      loggedIn: !this.state.loggedIn
    }
  }

  render(){
    console.log(this.state.loggedIn)
    return (
      <div className="App">
        <h1> Catch Tracker </h1>
        <button onClick={this.toggleLogin()}>click</button>
        <Login />
        <h2>{`${this.state.loggedIn}`}</h2>
        <Home/>
        <MyCatch />
      </div>
    );
  }
}

export default App;
