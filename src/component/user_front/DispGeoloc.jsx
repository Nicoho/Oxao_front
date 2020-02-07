import React from 'react';
import { geolocated } from 'react-geolocated';

function DispGeoloc() {
  return (
    <div className="DispGeoloc" />
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: true,
})(DispGeoloc);
