import React from 'react';
import Proptypes from 'proptypes';
import { connect } from 'react-redux';

import { initiateClick } from '../../store/modules/place/index';

import './index.scss';

const Place = ({
  text1,
  text2,
  text3,
  text4,
  colorArray,
  details,
  initiateClick: updatePlaceInStore,
}) => {
  const handleClick = () => updatePlaceInStore(details);

  return (
    <button type="button" className="place" onClick={handleClick}>
      <span
        className="place_elem"
        style={{ color: `${colorArray[0] || ''}` }}
      >
        {text1}
      </span>
      <span
        className="place_elem"
        style={{ color: `${colorArray[1] || ''}` }}
      >
        {text2}
      </span>
      <span
        className="place_elem"
        style={{ color: `${colorArray[2] || ''}` }}
      >
        {text3}
      </span>
      <span
        className="place_elem"
        style={{ color: `${colorArray[3] || ''}` }}
      >
        {text4}
      </span>
    </button>
  );
};

Place.propTypes = {
  text1: Proptypes.string,
  text2: Proptypes.string,
  text3: Proptypes.string,
  text4: Proptypes.string,
  colorArray: Proptypes.shape([]),
  details: Proptypes.shape({}).isRequired,
  initiateClick: Proptypes.func.isRequired,
};

Place.defaultProps = {
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  colorArray: [],
};

const mapStateToProps = (state) => (
  { placeReducer: state.placeReducer }
);

export default connect(mapStateToProps, { initiateClick })(Place);
