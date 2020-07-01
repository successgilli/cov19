import React, { useEffect, useState } from 'react';
import Proptypes from 'proptypes';
import { connect } from 'react-redux';

import Place from 'Components/Place/index';

import './index.scss';

const EntityBucket = ({
  mainTitle,
  title,
  count,
  elems,
  style,
  elemColor,
  name,
  bucketState,
}) => {
  const elements = elems.map(({
    text1, text2, text3, text4, details,
  }) => (
    <Place
      text1={text1}
      text2={text2}
      text3={text3}
      text4={text4}
      colorArray={elemColor}
      details={details}
    />
  ));
  const [styleMax, setstyleMax] = useState({});

  useEffect(() => {
    setstyleMax({ maxHeight: bucketState[name] ? '0px' : '100%' });
  }, [bucketState[name]]);

  return (
    <div name={name} style={styleMax} className="entityBucket">
      <p className="entityBucket_mainTitle" style={{ ...style }}>{mainTitle}</p>
      <p className="entityBucket_title" style={{ ...style }}>{title}</p>
      <p className="entityBucket_count" style={{ ...style }}>{count}</p>
      <div className="entityBucket_content">
        {elements}
      </div>
    </div>
  );
};

EntityBucket.propTypes = {
  title: Proptypes.string,
  elems: Proptypes.shape([]).isRequired,
  mainTitle: Proptypes.string,
  count: Proptypes.string,
  style: Proptypes.shape({}),
  name: Proptypes.string,
  bucketState: Proptypes.shape({}).isRequired,
  elemColor: Proptypes.shape([]).isRequired,
};

EntityBucket.defaultProps = {
  mainTitle: '',
  title: '',
  count: '',
  style: {},
  name: '',
};

const mapStateToProps = (state) => ({ bucketState: state.bucketReducer });

export default connect(mapStateToProps, null)(EntityBucket);
