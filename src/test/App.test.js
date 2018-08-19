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

  it('should pass correct props to both CardList components', () => {
    const expected1 = { 
      'dataCards': wrapper.state('compareCards'),
      'toggleCompare': wrapper.instance().toggleCompare
    };
    const expected2 = {
      'dataCards': wrapper.state('dataCards'), 
      'toggleCompare': wrapper.instance().toggleCompare
    };

    expect(wrapper.find(CardList).first().props()).toEqual(expected1);
    expect(wrapper.find(CardList).last().props()).toEqual(expected2);
  });

  it('should contain a filled comparedData object in state if comparedCards is full', () => {
    wrapper.instance().toggleCompare('COLORADO');
    wrapper.instance().toggleCompare('ASPEN 1');
    const expected = Object.keys(wrapper.state('comparedData'));
    expect(expected.length).toEqual(3);
  });

  it('should not contain a filled comparedData object in state if data is removed from comparedCards', () => {
    wrapper.instance().toggleCompare('COLORADO');
    wrapper.instance().toggleCompare('ASPEN 1');
    let expected = Object.keys(wrapper.state('comparedData'));
    expect(expected.length).toEqual(3);
    wrapper.instance().toggleCompare('ASPEN 1');
    expected = Object.keys(wrapper.state('comparedData'));
    expect(expected.length).toEqual(0);
  });

  it('passing toggleCompre an id should have it update state on compareCards array', () => {
    let expected = Object.keys(wrapper.state('compareCards')[0]).length;
    expect(expected).toEqual(0);
    wrapper.instance().toggleCompare('COLORADO');
    expected = Object.keys(wrapper.state('compareCards')[0]).length;  
    expect(expected).toEqual(3);
  });

  });

  it('should have a default state of an empty schools array', () => {
    expect(wrapper.state().schools).toEqual([]);
  });

  it('should render a CardList component', () => {
    expect(wrapper.find('CardList').length).toEqual(1);
  });
})

