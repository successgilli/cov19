import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'proptypes';

import AreaDetails from 'Components/AreaDetail/index';
import Modal from 'Components/Modal/index';

import './index.scss';

const DragDropContainer = ({
  placeReducer: { details },
}) => {
  const [areas, setAreas] = useState([]);
  const [modal, switchModal] = useState(true);

  useEffect(() => {
    setAreas(Object.values(details));
    switchModal(!modal);
  }, [details]);

  const areaElems = areas.map(({
    Country,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
  }) => (
    <AreaDetails
      key={Country}
      name={Country}
      confirmed={TotalConfirmed}
      recovered={TotalRecovered}
      deaths={TotalDeaths}
    />
  ));

  return (
    <div className="dragDropContainer">
      {areaElems}
      {
      modal
      && (window.innerWidth < 917)
      && (
      <Modal>
        {areaElems[0]}
      </Modal>
      )
      }
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
