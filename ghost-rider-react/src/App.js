import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

import MainContainer from './MainContainer/MainContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
       <MainContainer />
      </div>
    );
  }
}

export default App;
