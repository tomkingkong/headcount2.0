import React from 'react';

import './CardList.css';
import Card from './Card';

const CardList = ({schools, selectSchool}) => {
      selected={selectSchool} 

  return (
    <section className="CardList">
      {displayCards}
    </section>
  );
}

export default CardList;