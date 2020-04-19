import React from 'react';

import badge from 'Images/badge.svg';
import handbugger from 'Images/handbuggar';

import './index.scss';

const Header = () => (
  <div className="header">
    <img className="header_badge" src={badge} alt="badge" />
    <div className="header_text">
      Coronavirus COVID-19 Global Cases by Johns Hopkins CSSE
    </div>
    <img className="header_buggar" src={handbugger} role="presentation" alt="hbugar" />
  </div>
);

export default Header;
