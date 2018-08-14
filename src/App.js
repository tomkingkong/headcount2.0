import React, { Component } from 'react';

import CardList from './CardList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      schools: []
    }
  }
  render() {
    return (
      <div>
        <CardList cards={this.state.schools}/>
      </div>
    );
  }
}

export default App;
