import React from 'react';
import HomeElements from './HomeElements';
import HomeTitle from './HomeTitle';

function HomeUnion() {
  return (
    <div className="HomeUnion" id="accueil">
      <HomeTitle />
      <HomeElements />
    </div>
  );
}

export default HomeUnion;
