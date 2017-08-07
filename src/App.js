import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Linde from "./Linde";
import Hello from "./Hello";
// import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Linde/>
        </div>
        <p className="App-intro">
            <Linde/>
            <Linde/>
            <Linde/>
          To get started, edit <code>src/App.js</code> and save to reload.
            <Hello/>
            <Hello/>
            <Hello/>
            <Hello/>
        </p>
      </div>
    );
  }
}


export default App;
