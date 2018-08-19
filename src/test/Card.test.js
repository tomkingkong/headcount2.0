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

  it('should match snapshot with an empty data object', () => {
    const schoolEmpty = {'stats': { }, 'location': '', 'id':''};
    const wrapper = shallow(<Card {...schoolEmpty} key={schoolEmpty.id}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct number of li\'s', () => {
    const wrapper = shallow(<Card {...school} key={school.id}/>);
    expect(wrapper.find('li').length).toEqual(4);
  });

  it('should add Green class to li if percent is greater than 0.5', () => {
    const schoolEmpty = {'stats': {2001: 0.6}, 'location': '', 'id':''};
    const wrapper = shallow(<Card {...schoolEmpty} key={schoolEmpty.id}/>);
    expect(wrapper.find('li').hasClass('Green')).toEqual(true);
  });

  it('should add Red class to li if percent is lesser than 0.5', () => {
    const schoolEmpty = {'stats': { 2001: 0.4}, 'location': '', 'id':''};
    const wrapper = shallow(<Card {...schoolEmpty} key={schoolEmpty.id}/>);
    expect(wrapper.find('li').hasClass('Red')).toEqual(true);
  });

});