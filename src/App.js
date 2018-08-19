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
  
  toggleCompare = (id) => {
    const { compareCards } = this.state;
    const newComparison = compareCards;
    const foundDistrict = district.findByName(id);
    const cardIndex = compareCards.indexOf(foundDistrict);

    for (let i = cardIndex; i < compareCards.length; i++) {
      if (i < 0) continue;
      if (!Object.keys(compareCards[i]).length) {
        newComparison[i] = foundDistrict;
        break;
      } else if (compareCards[i].location === id) {
        newComparison[i] = {};
        break;
      }
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
