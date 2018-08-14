import React, { Component } from 'react';

import CardList from './CardList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      schools: [
        {'Date': {2005: 0.521, 2017: 0.521, 2018: 0.521, 2019: 0.521 }, 'Location': 'COLORADO', 'id':1},
        {'Date': {2005: 0.521, 2017: 0.521, 2018: 0.521, 2019: 0.521 }, 'Location': 'COLORADO', 'id':2},
        {'Date': {2005: 0.521, 2017: 0.521, 2018: 0.521, 2019: 0.521 }, 'Location': 'COLORADO', 'id':3}
      ]
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
