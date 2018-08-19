import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({
  stats, 
  location, 
  id, 
  toggleCompare, 
  comparedData
}) => {

  const dates = Object.keys(stats).map(year => (
      <li className={stats[year] > 0.5 ? 'Green' : 'Red'} 
      key={location+year}
    >
      {year}: {stats[year]}
    </li>
  ))
  
  return (
    <article className="Card" onClick={() => {selected(id)}}>
      <h1>{location}</h1>
      <ul>{dates}</ul>
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