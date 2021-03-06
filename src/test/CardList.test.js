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

  it('should match the snapshot passing an empty array', () => {
    const wrapper = shallow(<CardList dataCards={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot passing an array with data', () => {
    const wrapper = shallow(<CardList dataCards={mockData}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot passing an array with data objects and a function', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CardList dataCards={mockData} toggleCompare={mockFn}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass Card components props without select function', () => {
    const wrapper = mount(<CardList dataCards={mockData}/>);
    const expected = {
      'stats': {
        2005: 0.521, 
        2017: 0.521, 
        2018: 0.521, 
        2019: 0.521 
      }, 
      'location': 'COLORADO', 
      'id':'COLORADO'
    };
    expect(wrapper.find(Card).first().props()).toEqual(expected);
  });

  it('should display correct number of cards', () => {
    const wrapper = mount(<CardList dataCards={mockData} />);
    expect(wrapper.find('article').length).toEqual(3);
  });

  
});