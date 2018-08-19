import React from 'react';
import PropTypes from 'prop-types';

import './CardList.css';
import Card from './Card';

const CardList = ({schools, selectSchool}) => {
  const displayCards = schools.map(school => (
    <Card 
      {...school} 
      id={school.key} 
      selected={selectSchool} 
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