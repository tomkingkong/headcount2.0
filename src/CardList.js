import React from 'react';

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
}

export default CardList;