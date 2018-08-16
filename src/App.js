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

  componentDidMount() {
    this.updateDistrict(undefined);
  }

  updateDistrict = (string) => {
    let newSearch = district.findAllMatches(string);
    newSearch.forEach(school => school.key = school.location);
    this.setState({
      schools: newSearch
    })
  }


  selectSchool = (id) => {
    console.log('selected', id)
  }

  render() {
    const { schools, compareSchools } = this.state
    return (
      <div className="App">
        {/* <Form updateDistrict={this.updateDistrict}/> */}
        <CardList cards={this.state.schools}/>
      </div>
    );
  }
}

export default App;
