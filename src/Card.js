import React from 'react';

const Card = ({Date, Location}) => {
  const dates = Object.keys(Date).map(year => <li key={Location+year}>{year}: {Date[year]}</li>)
  return (
    <article>
      <h1>{Location}</h1>
      <ul>{dates}</ul>
    </article>
  );
}

export default Card;