import React from 'react';

import Card from './Card';

const CardList = ({cards}) => {
  const displayCards = cards.map(card => <Card {...card} key={card.id} />);

  return (
    <section>
      {displayCards}
    </section>
  );
}

export default CardList;