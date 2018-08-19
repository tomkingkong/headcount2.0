import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

describe('Card', () => {
  let wrapper;
  let card = {'Date': {2005: 0.521, 2017: 0.521, 2018: 0.521, 2019: 0.521 }, 'Location': 'COLORADO', 'id':1}

  beforeEach(() => {
    wrapper = shallow(<Card {...card} key={card.id}/>);
  });
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

})