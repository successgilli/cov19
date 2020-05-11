import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'proptypes';

import AreaDetails from 'Components/AreaDetail/index';

import './index.scss';

const DragDropContainer = ({
  placeReducer: { details },
}) => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setAreas(Object.values(details));
  }, [details]);

  const areaElems = areas.map(({
    name,
    confirmed,
    recovered,
    deaths,
  }) => (
    <AreaDetails
      key={name}
      name={name}
      confirmed={confirmed}
      recovered={recovered}
      deaths={deaths}
    />
  ));

  return (
    <div className="dragDropContainer">
      {areaElems}
    </div>
  );
};

DragDropContainer.propTypes = {
  placeReducer: Proptypes.shape({
    details: Proptypes.shape({}).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => (
  { placeReducer: state.placeReducer }
);

export default connect(mapStateToProps)(DragDropContainer);
