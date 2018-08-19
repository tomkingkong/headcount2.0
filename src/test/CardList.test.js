import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from '../Card';
import CardList from '../CardList.js';

const mockData = [
  {
    'stats': {
      2005: 0.521, 
      2017: 0.521, 
      2018: 0.521, 
      2019: 0.521 
    }, 
    'location': 'COLORADO', 
    'id':'COLORADO'
  },
  {
    'stats': {
      2005: 0.521, 
      2017: 0.521, 
      2018: 0.521, 
      2019: 0.521 
    }, 
    'location': 'ASPEN', 
    'id':'ASPEN'
  },
  {
    'stats': {
      2005: 0.521, 
      2017: 0.521, 
      2018: 0.521, 
      2019: 0.521 
    }, 
    'location': 'SHMOOP', 
    'id':'SHMOOP'
  }
];

describe('CardList', () => {

  beforeEach(() => {
    wrapper = shallow(<CardList cards={mockData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(<CardList cards={mockData} />, section);
  });

  it('should render section element', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });

  it('should display correct number of cards', () => {
    wrapper = mount(<CardList cards={mockData} />)
    expect(wrapper.find('article').length).toEqual(3);
  });
});