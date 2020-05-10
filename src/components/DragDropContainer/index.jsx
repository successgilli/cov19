import React, { useState } from 'react';

import AreaDetails from 'Components/AreaDetail/index';

import './index.scss';

const DragDropContainer = () => {
  const [areas] = useState([{
    name: 'New York',
    confirmed: '232,122',
    recovered: '32,1342',
    deaths: '323,442',
  }]);

  const areaElems = areas.map(({
    name,
    confirmed,
    recovered,
    deaths,
  }) => (
    <AreaDetails
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

export default DragDropContainer;
