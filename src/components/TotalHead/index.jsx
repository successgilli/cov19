import React from 'react';
import Proptypes from 'proptypes';

import './index.scss';

const TotalContent = ({ title, count, style }) => (
  <div className="totalContent">
    <p className="totalContent_title">{title}</p>
    <p style={style} className="totalContent_count">{count}</p>
  </div>
);

TotalContent.propTypes = {
  title: Proptypes.string.isRequired,
  count: Proptypes.string.isRequired,
  style: Proptypes.shape({}),
};

TotalContent.defaultProps = {
  style: {},
};

export default TotalContent;
