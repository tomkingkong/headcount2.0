import React from 'react';
import PropTypes from 'prop-types';

import './CompareCard.css';

const CompareCard = ({comparedData}) => {
  const data = Object.keys(comparedData);
  return (
    <article className={typeof comparedData.compared === 'number' ? "CompareCard" : "CompareCard hide"}>
      <h4>{comparedData[data[0]]}<br/>AVG</h4>
      <p>{comparedData.compared}</p>
      <h4>{comparedData[data[1]]}<br/>AVG</h4>
    </article>
  );
};

CompareCard.propTypes = {
  comparedData: PropTypes.object
};

export default CompareCard;