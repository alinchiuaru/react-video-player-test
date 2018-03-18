import React, { Component } from 'react';
import './App.css';

import PlayerWrapper from './containers/PlayerWrapper';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <PlayerWrapper />
      </div>
    );
  }
}

export default App;
