import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Preview from './components/Preview.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar
          sexualityList={["Straight","Gay","Bisexual"]}
          romanticList={["Heteroromantic","Homoromantic","Biromantic"]}
          genderList={["Cisgender","Transgender"]}
          pronounList={["he/him","she/her","they/them"]}
          interestList={["Activist","Postgender"]}
        />
        <Preview />
      </div>
    );
  }
}

export default App;
