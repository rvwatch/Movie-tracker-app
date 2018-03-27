import React, { Component } from 'react';
import logo from './logo.svg';
import { Router, Route, NavLink } from 'react-router-dom';
import { fetchApi } from './ApiCalls/apiCalls';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const data = fetchApi();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movie Tracker!!!!</h1>
        </header>
      </div>
    );
  }
}

export default App;
