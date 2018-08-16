import React from 'react';

import './Card.css';

const Card = ({stats, location, id, selected}) => {
  const dates = Object.keys(stats).map(year => (
    <li 
      className={stats[year] > 0.5 ? 'Green' : 'Red'} 
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
}

export default Card;