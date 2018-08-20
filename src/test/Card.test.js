import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';
const data = {
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
    const wrapper = shallow(<Card {...data} key={data.id}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with a data object and function', () => {
    const toggleCompare = jest.fn();
    const wrapper = shallow(<Card {...data} key={data.id} selected={toggleCompare}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with an empty data object', () => {
    const dataEmpty = {'stats': { }, 'location': '', 'id':''};
    const wrapper = shallow(<Card {...dataEmpty} key={dataEmpty.id}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct number of li\'s', () => {
    const wrapper = shallow(<Card {...data} key={data.id}/>);
    expect(wrapper.find('li').length).toEqual(4);
  });

  it('should add Green class to li if percent is greater than 0.5', () => {
    const dataEmpty = {'stats': {2001: 0.6}, 'location': '', 'id':''};
    const wrapper = shallow(<Card {...dataEmpty} key={dataEmpty.id}/>);
    expect(wrapper.find('li').hasClass('Green')).toEqual(true);
  });

  it('should add Red class to li if percent is lesser than 0.5', () => {
    const dataEmpty = {'stats': { 2001: 0.4}, 'location': '', 'id':''};
    const wrapper = shallow(<Card {...dataEmpty} key={dataEmpty.id}/>);
    expect(wrapper.find('li').hasClass('Red')).toEqual(true);
  });

  it.skip('should have default state selected equal false', () => {

  });

  it.skip('should state selected equal true if card clicked', () => {

  });

  it.skip('should obtain class of selected once clicked', () => {

  });

  it.skip('should remove class of selected if clicked again', () => {

  });

  it.skip('should not obtain class of selected if two other cards contain that class', () => {

  });
});