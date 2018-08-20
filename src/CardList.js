import React from 'react';
import PropTypes from 'prop-types';

import './CardList.css';
import Card from './Card';

const CardList = ({dataCards, toggleCompare, compare, compareCards}) => {
  const displayCards = dataCards.map(card => (
    <Card 
      compare={compare}
      {...card} 
      compareIDs={compareCards}
      key={card.location}
      id={card.location} 
      toggleCompare={toggleCompare} 
    />
  ));

  return (
    <section className={compare ? "CompareList" : "CardList"}>
      {displayCards}
    </section>
  );
};

CardList.propTypes = {
  dataCards: PropTypes.array,
  toggleCompare: PropTypes.func,
  compare: PropTypes.bool,
  compareCards: PropTypes.array
};

export default CardList;