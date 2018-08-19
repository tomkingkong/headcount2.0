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

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a default state of an empty schools array', () => {
    expect(wrapper.state().schools).toEqual([]);
  });

  it('should render a CardList component', () => {
    expect(wrapper.find('CardList').length).toEqual(1);
  });
})

