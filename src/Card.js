import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    }
  }

  handleClick = () => {
    const { toggleCompare, id, compare } = this.props;
    if (!id) return false;
    if (toggleCompare(id) !== false) {
      this.setState({
        selected: !this.state.selected
      })
    }
  }
        key={location+year}
      >
        {year}: {stats[year]}
      </li>
    ));
    return (
      <div>
        <h1>{location}</h1>
        <ul>{dates}</ul>
      </div>
    );
  };

  const displayCompareData = () => {
    const data = Object.keys(comparedData);
    return (
      <div>
        <h2>{data[0]}: {comparedData[data[0]]}</h2>
        <p>{comparedData.compared}</p>
        <h2>{data[1]}: {comparedData[data[1]]}</h2>
      </div>
    );
  };
  
  return (
    <article className="Card" 
      onClick={() => { toggleCompare && toggleCompare(id); }} 
    >
      {comparedData && displayCompareData()}
      {stats && displayCardData()}
    </article>
  );
};

Card.propTypes = {
  stats: PropTypes.object, 
  location: PropTypes.string, 
  id: PropTypes.string, 
  toggleCompare: PropTypes.func, 
  comparedData: PropTypes.object
};

export default Card;