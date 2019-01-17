import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu.js';
import Content from './components/Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Content/>
      </div>
    );
  }
}

export default App;
