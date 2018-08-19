import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';
const school = {
  'stats': { 
    2005: 0.521, 
    2017: 0.521, 
    2018: 0.521, 
    2019: 0.521 
  }, 
  'location': 'SHMOOP', 
  'id':'SHMOOP'
};

describe('Card', () => {
    
  it('should match snapshot with a data object', () => {
    const wrapper = shallow(<Card {...school} key={school.id}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with a data object and function', () => {
    const selectSchool = jest.fn();
    const wrapper = shallow(<Card {...school} key={school.id} selected={selectSchool}/>);
    expect(wrapper).toMatchSnapshot();
  });


  beforeEach(() => {
    wrapper = shallow(<Card {...card} key={card.id}/>);
  });
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

})