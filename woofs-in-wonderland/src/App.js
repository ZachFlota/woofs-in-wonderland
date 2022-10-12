import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
