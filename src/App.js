import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Preview from './components/Preview.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Preview />
      </div>
    );
  }
}

export default App;
