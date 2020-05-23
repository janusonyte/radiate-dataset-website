import React, { Component } from 'react';
import Home from '../src/containers/Home';
import About from '../src/containers/About';
import '../src/App.css'
import Navbar from './components/Navbar/Navbar.js';
import Downloads from '../src/containers/Downloads'



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="App-container">
          <Home />
          <About />
          <Downloads />
        </div>
      </div>
    );
  }
}



export default App;
