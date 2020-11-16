// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [ redCar, setRedCar ] = useState(false);
  const [ blueCar, setBlueCar ] = useState(false);
  const [ yellowCar, setYellowCar ] = useState(false);

  const context = {
    redCar, setRedCar, blueCar, setBlueCar, yellowCar, setYellowCar
  };

  const { children } = props;

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
