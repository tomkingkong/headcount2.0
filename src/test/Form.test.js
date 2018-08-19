import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

describe('Form', () => {
  let wrapper;
  const updateDistrict = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form updateDistrict={updateDistrict}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on change', () => {
    const event = { target: { value: 'col' } };
    expect(wrapper.state('input')).toEqual('');
    wrapper.instance().handleChange(event);
    expect(wrapper.state('input')).toEqual('col');
  });

  it('hanldeChange should update input value', () => {
    const event = { target: { value: 'col' } };
    wrapper.instance().handleChange(event);
    expect(wrapper.find('input').props().value).toEqual('col');
  });

  it('should call updateDistrict from props on change', () => {
    const event = { target: { value: 'col' } };
    wrapper.instance().handleChange(event);
    expect(updateDistrict).toHaveBeenCalled();
  });

  it('user should see the input they type on change', () => {
    const event = { target: { value: 'col' } };
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('input').props().value).toEqual('col');
  });

  it('should clear input on submit', () => {
    let event = { target: { value: 'col' } };
    wrapper.instance().handleChange(event);
    expect(wrapper.state('input')).toEqual('col');
    event = { preventDefault: jest.fn(), target: { value: 'col' } };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.state('input')).toEqual('');
  });

  it('user should see form clear and repopulate on submit', () => {
    let event = { target: { value: 'col' } };
    wrapper.find('input').simulate('change', event);
    event = { preventDefault: jest.fn(), target: { value: 'col' } };
    wrapper.find('form').simulate('submit', event);
    expect(wrapper.find('input').props().value).toEqual('');
  });

});