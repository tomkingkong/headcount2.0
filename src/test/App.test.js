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

  it('passing toggleCompre an id already existing in compareCards array should remove it', () => {
    let expected = Object.keys(wrapper.state('compareCards')[0]).length;
    wrapper.instance().toggleCompare('COLORADO');
    expected = Object.keys(wrapper.state('compareCards')[0]).length;  
    expect(expected).toEqual(3);
    wrapper.instance().toggleCompare('COLORADO');
    expected = Object.keys(wrapper.state('compareCards')[0]).length;  
    expect(expected).toEqual(0);
  });

  it('passing toggleCompareData two data cards should set state on the comparedData object ', () => {
    wrapper.instance().toggleComparedData({'location':'COLORADO'}, {'location': 'ASPEN 1'});
    const expected = Object.keys(wrapper.state('comparedData'));
    expect(expected.length).toEqual(3);
  });

  it('when a user selects a card it should appear in the compareCards array', () => {
    wrapper = mount(<App />);
    const cardInField = wrapper.find(CardList).last().find(Card).first().find('article');
    let expected = Object.keys(wrapper.state('compareCards')[0]).length;  
    expect(expected).toEqual(0);
    cardInField.simulate('click');
    expected = Object.keys(wrapper.state('compareCards')[0]).length;  
    expect(expected).toEqual(3);
  });

  it('selecting two cards should add information to the comparedData object in state', () => {
    wrapper = mount(<App />);
    const cardInField1 = wrapper.find(CardList).last().find(Card).at(0).find('article');
    const cardInField2 = wrapper.find(CardList).last().find(Card).at(1).find('article');
    expect(Object.keys(wrapper.state('comparedData')).length).toEqual(0);
    cardInField1.simulate('click');
    cardInField2.simulate('click');
    expect(Object.keys(wrapper.state('comparedData')).length).toEqual(3);
  });

  it('should have no more than two cards in the compareCards array', () => {
    wrapper = mount(<App />);    
    const cardInField1 = wrapper.find(CardList).last().find(Card).at(0);
    const cardInField2 = wrapper.find(CardList).last().find(Card).at(2);
    const cardInField3 = wrapper.find(CardList).last().find(Card).at(3);
    cardInField1.simulate('click');
    cardInField2.simulate('click');
    expect(wrapper.state('compareCards').length).toEqual(2);
    cardInField3.simulate('click');
    expect(wrapper.state('compareCards').length).toEqual(2);
  });

  it('user should be able to deselect a card from the compareCards array', () => {
    wrapper = mount(<App />);
    const cardInField = wrapper.find(CardList).last().find(Card).first().find('article');
    cardInField.simulate('click');
    let expected = Object.keys(wrapper.state('compareCards')[0]).length; 
    expect(expected).toEqual(3);
    const cardInComparison = wrapper.find(CardList).first().find(Card).find('article').first();
    cardInComparison.simulate('click');
    expected = Object.keys(wrapper.state('compareCards')[0]).length; 
    expect(expected).toEqual(0);
  });

  it('user should be able to deselect a card from the dataCards array', () => {
    wrapper = mount(<App />);
    const cardInField1 = wrapper.find(CardList).last().find(Card).first().find('article');
    cardInField1.simulate('click');
    let expected = Object.keys(wrapper.state('compareCards')[0]).length; 
    expect(expected).toEqual(3);
    cardInField1.simulate('click');
    expected = Object.keys(wrapper.state('compareCards')[0]).length; 
    expect(expected).toEqual(0);
  });

  });

  it('should render a CardList component', () => {
    expect(wrapper.find('CardList').length).toEqual(1);
  });
})

