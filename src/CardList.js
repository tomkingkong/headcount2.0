import React from 'react';
import PropTypes from 'prop-types';

import './CardList.css';
import Card from './Card';

const CardList = ({dataCards, toggleCompare}) => {
  const displayCards = dataCards.map(card => (
    <Card {...card} 
      key={card.location}
      id={card.location} 
      toggleCompare={toggleCompare} 
    />
  ));

  return (
    <section className="CardList">
      {displayCards}
    </section>
  );
};

CardList.propTypes = {
  dataCards: PropTypes.array,
  toggleCompare: PropTypes.func
};

export default CardList;