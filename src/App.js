import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import BaseContainer from './BaseContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokédex</h2>
        </div>
        <div className="App-body">
          <BaseContainer/> 
        </div>
      </div>
    );
  }
}

export default App;
