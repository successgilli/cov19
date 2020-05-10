import React from 'react';

import TotalContent from 'Components/TotalHead/index';
import EntityBucket from 'Components/EntityBucket/index';
import DragDropContainer from 'Components/DragDropContainer/index';

import './index.scss';

const Content = () => {
  const style = { color: '#D6D6D6' };
  const elemsForConfirmed = [
    {
      text1: '12,34432',
      text2: 'US',
      details: {
        name: 'US', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'New York',
      details: {
        name: 'New York', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'Nigeria',
      details: {
        name: 'Nigeria', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'Ghana',
      details: {
        name: 'Ghana', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'China',
      details: {
        name: 'China', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'Italy',
      details: {
        name: 'Italy', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'Spain',
      details: {
        name: 'Spain', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
    {
      text1: '12,34432',
      text2: 'united Kingdom',
      details: {
        name: 'united Kingdom', confirmed: '12,34432', recovered: '12,34432', deaths: '12,34432',
      },
    },
  ];

  return (
    <div className="content">
      <div className="content_1">
        <TotalContent title="Total Confirmed" count="546,232" />
        <EntityBucket
          title="Confirmed Cases by Country/Region/Sovereignty"
          style={style}
          elems={elemsForConfirmed}
          elemColor={['red', '#D6D6D6']}
        />
      </div>
      <div className="content_2">
        <DragDropContainer />
      </div>
      <div className="content_3" />
    </div>
  );
};

export default Content;
