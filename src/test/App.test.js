import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import CardList from '../CardList';
import Card from '../Card';
import Form from '../Form';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshot with default states', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with compareCards filled with partial data', () => {
    wrapper.instance().toggleCompare('COLORADO');
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with compareCards filled filled with data', () => {
    wrapper.instance().toggleCompare('COLORADO');
    wrapper.instance().toggleCompare('ASPEN 1');
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on componentDidMount with a populated dataCards array', () => {
    expect(wrapper.state('dataCards')).not.toEqual(0);
  });
  
  it('should pass correct props to Form component', () => {
    const expected = {'updateDistrict': wrapper.instance().updateDistrict};
    expect(wrapper.find(Form).props()).toEqual(expected);
  });
  
  it('should pass correct props to Card component', () => {
    wrapper.instance().toggleCompare('COLORADO');
    wrapper.instance().toggleCompare('ASPEN 1');
    const expected =  {
      "comparedData": {
        'COLORADO': 0.53, 
        'ASPEN 1': 0.999,
        'compared': 0.531
      }
    };
    expect(wrapper.find(Card).first().props()).toEqual(expected);
  });
  });

  it('should have a default state of an empty schools array', () => {
    expect(wrapper.state().schools).toEqual([]);
  });

  it('should render a CardList component', () => {
    expect(wrapper.find('CardList').length).toEqual(1);
  });
})

