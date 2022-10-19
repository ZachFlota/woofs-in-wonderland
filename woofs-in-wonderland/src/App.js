import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/navBar';
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
