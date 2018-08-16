import React, { Component } from 'react';

import kinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardList from './CardList';
import Form from './Form';
import './App.css';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      schools: [],
      compareSchools: []
    }
  }

  updateDistrict = (string) => {
    let newSearch = district.findAllMatches(string);
    
    this.setState({
      schools: newSearch
    })
  }

  componentDidMount() {
    this.updateDistrict(undefined);
  }

  render() {
    return (
      <div className="App">
        {/* <Form updateDistrict={this.updateDistrict}/> */}
        <CardList cards={this.state.schools}/>
      </div>
    );
  }
}

export default App;
