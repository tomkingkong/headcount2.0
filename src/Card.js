import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    }

  handleClick = () => {
    const { toggleCompare, id } = this.props;
    if (!id) return false;
    if (toggleCompare(id) !== false) {
      this.setState({
        selected: !this.state.selected
      });
    }
  }
  
  render() {
    const { stats, location, compare } = this.props;
    let dates;
    if (stats) {
      dates = Object.keys(stats).map(year => (
        <li 
          className={stats[year] > 0.5 ? "Green" : "Red"} 
          key={location+year}
        >
          {year}: {stats[year]}
        </li>
      ));
    }
    return (
      <article 
        className={this.state.selected || compare ? "Card selected" : "Card"} 
        onClick={this.handleClick} 
      >
        <div>
          <h1>{location}</h1>
          <ul>{dates}</ul>
        </div>
      </article>
    );
}
}

Card.propTypes = {
  stats: PropTypes.object, 
  location: PropTypes.string, 
  id: PropTypes.string, 
  toggleCompare: PropTypes.func, 
  comparedData: PropTypes.object
};

export default Card;