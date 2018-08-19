import React, { Component } from 'react';

import kinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardList from './CardList';
import Form from './Form';
import Card from './Card';
import './App.css';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataCards: [],
      compareCards: [{}, {}],
      comparedData: {}
    };
    }
  }

  componentDidMount() {
    this.updateDistrict();
  }

  updateDistrict = (string) => {
    const dataCards = district.findAllMatches(string);
    dataCards.forEach(card => card.key = card.location);
    this.setState({ dataCards });
  }
  
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
        <CardList schools={compareSchools} />
        <Form updateDistrict={this.updateDistrict} />
        <CardList schools={schools} selectSchool={this.selectSchool}/>
      </div>
    );
  }
}

export default App;
