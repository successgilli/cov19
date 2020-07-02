import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'proptypes';

import { initHeightChange } from '../../store/modules/bucket/index';

import './index.scss';

const TotalContent = ({
  title, count, style, changeHeight, name, bucketState,
}) => {
  const handleClick = () => changeHeight({ [name]: !bucketState[name] });

  return (
    <button name={name} type="button" onClick={handleClick} className="totalContent">
      <p className="totalContent_title">{title}</p>
      <p style={style} className="totalContent_count">{count}</p>
    </button>
  );
};

TotalContent.propTypes = {
  title: Proptypes.string.isRequired,
  count: Proptypes.string.isRequired,
  style: Proptypes.shape({}),
  name: Proptypes.string,
  bucketState: Proptypes.shape({}).isRequired,
  changeHeight: Proptypes.func.isRequired,
};

TotalContent.defaultProps = {
  style: {},
  name: '',
};

const mapStateToProps = (state) => ({ bucketState: state.bucketReducer });

export default connect(
  mapStateToProps,
  { changeHeight: initHeightChange },
)(TotalContent);
