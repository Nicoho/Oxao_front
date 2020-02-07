import React from 'react';
import Wasteland from './Wasteland';
import Rehab from './Rehab';
import PartnersLinks from './PartnersLinks';
import HomeUnion from './HomeUnion';
import MapLocation from './MapLocation';
import Mail from './Mail';

function Home() {
  return (
    <div className="App">
      <HomeUnion />
      <MapLocation />
      <Wasteland />
      <Rehab />
      <PartnersLinks />
      <Mail />
    </div>
  );
}

export default Home;
