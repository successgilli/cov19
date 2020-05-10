import React from 'react';
import Proptypes from 'proptypes';

import Place from 'Components/Place/index';

import './index.scss';

const EntityBucket = ({
  mainTitle,
  title,
  count,
  elems,
  style,
  elemColor,
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

  return (
    <div className="entityBucket">
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
  elemColor: Proptypes.shape([]).isRequired,
};

EntityBucket.defaultProps = {
  mainTitle: '',
  title: '',
  count: '',
  style: {},
};

export default EntityBucket;
