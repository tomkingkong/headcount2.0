import React, { Component } from 'react';

import kinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardList from './CardList';
import Form from './Form';
import CompareCard from './CompareCard';
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
      compareCards: newComparison
    }, () => this.toggleComparedData(...this.state.compareCards));
  }

  toggleComparedData = (loc1, loc2) => {
    let updateData = {};
    if (Object.keys(loc1).length && Object.keys(loc2).length) {
      updateData = district.compareDistrictAverages(loc1.location, loc2.location);
    } 
    this.setState({
      comparedData: updateData
    });
  }

  render() {
    const { dataCards, comparedData, compareCards } = this.state;
    return (
      <div className="App">
        {typeof comparedData.compared === "number" && <Card comparedData={comparedData} />}
        <CardList dataCards={compareCards} toggleCompare={this.toggleCompare} />
        <Form updateDistrict={this.updateDistrict} />
        <CardList dataCards={dataCards} toggleCompare={this.toggleCompare} />
      </div>
    );
  }
}

export default App;
