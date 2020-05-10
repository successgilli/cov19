import React from 'react';
import Proptypes from 'proptypes';

import close from 'Images/close';

import './index.scss';

const AreaDetail = ({
  name,
  confirmed,
  recovered,
  deaths,
}) => (
  <div className="areaDetails">
    <p className="areaDetails_title">
      Detail
      <img className="areaDetails_close" src={close} alt="close" />
    </p>
    <div className="areaDetails_content">
      <p className="areaDetails_item">{name}</p>
      <p className="areaDetails_item">
        Confirmed:
        <span className="areaDetails_confirmed">
          {' '}
          {confirmed}
        </span>
      </p>
      <p className="areaDetails_item">
        Recovered:
        <span className="areaDetails_recovered">
          {' '}
          {recovered}
        </span>
      </p>
      <p className="areaDetails_item">
        Deaths:
        <span className="areaDetails_deaths">
          {' '}
          {deaths}
        </span>
      </p>
    </div>
  </div>
);

AreaDetail.propTypes = {
  name: Proptypes.string.isRequired,
  confirmed: Proptypes.string.isRequired,
  recovered: Proptypes.string.isRequired,
  deaths: Proptypes.string.isRequired,
};

export default AreaDetail;
