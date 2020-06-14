import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'proptypes';

import TotalContent from 'Components/TotalHead/index';
import EntityBucket from 'Components/EntityBucket/index';
import DragDropContainer from 'Components/DragDropContainer/index';

import './index.scss';
import { getCovidResults } from '../../store/modules/place';
import countrySortFunc from '../../util/helpers/countryUtil';

const Content = ({ countryList, covidPlaces: { countries, states } }) => {
  useEffect(() => {
    countryList();
  }, []);

  const style = { color: '#D6D6D6' };

  const elemsForConfirmed = countrySortFunc(countries, 'TotalConfirmed');
  const elemsForDeath = countrySortFunc(countries, 'TotalDeaths', 2);
  const elemsForStates = countrySortFunc(states, 'TotalDeaths', 3);

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
      <div className="content_3">
        <div className="content_1">
          <TotalContent style={{ color: 'white' }} title="Global Deaths" count="546,232" />
          <EntityBucket
            style={style}
            elems={elemsForDeath}
            elemColor={['white', '#D6D6D6', 'grey']}
          />
        </div>
        <div className="content_1">
          <TotalContent style={{ color: 'white' }} title="Nigeria state level" count="546,232" />
          <EntityBucket
            style={style}
            elems={elemsForStates}
            elemColor={['white', 'green', 'white', '#D6D6D6']}
          />
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  countryList: Proptypes.shape([]).isRequired,
  covidPlaces: Proptypes.shape({
    countries: Proptypes.shape([]),
    states: Proptypes.shape([]),
  }).isRequired,
};

const mapStateToProps = (state) => ({ covidPlaces: state.placeReducer });

export default connect(mapStateToProps, { countryList: getCovidResults })(Content);
