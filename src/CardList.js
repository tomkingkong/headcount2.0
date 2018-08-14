import React from 'react';

import './CardList.css';
import Card from './Card';

const CardList = ({cards}) => {
  let id = 0;
  const displayCards = cards.map(card => <Card {...card} key={id++} />);

  return (
    <section className="CardList">
      {displayCards}
    </section>
  );
}

export default CardList;