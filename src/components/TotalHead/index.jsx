import React from 'react';
import Proptypes from 'proptypes';

import './index.scss';

const TotalContent = ({ title, count }) => (
  <div className="totalContent">
    <p className="totalContent_title">{title}</p>
    <p className="totalContent_count">{count}</p>
  </div>
);

TotalContent.propTypes = {
  title: Proptypes.string.isRequired,
  count: Proptypes.string.isRequired,
};

export default TotalContent;
