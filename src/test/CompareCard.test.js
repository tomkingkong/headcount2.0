import React from 'react';
import { shallow } from 'enzyme';

import CompareCard from '../CompareCard';

const mockData =  {
  "comparedData": {
    'COLORADO': 0.53, 
    'ASPEN 1': 0.999,
    'compared': 0.531
  }
};

describe('CompareCard', () => {

  it('should match the snapshot passing an empty data object', () => {
    const wrapper = shallow(<CompareCard comparedData={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot passing an array with data', () => {
    const wrapper = shallow(<CompareCard comparedData={mockData}/>);
    expect(wrapper).toMatchSnapshot();
  });

});