import React from 'react';
import { NavLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Rehab.scss';


function Rehab() {
  return (
    <div className="Rehab">
      <h2 className="title"> Friches réhabilitées</h2>
      <Carousel>
        <div className="container-rehab">
          <img src="images/Capture.jpg" alt="imgBefore" />
          <p className="legend">Avant réhabilitation</p>
        </div>
        <div>
          <img src="images/Capture1.jpg" alt="imgAfter" />
          <p className="legend">Après réhabilitation</p>
        </div>
      </Carousel>
      <p className="text-rehab">
        { `Milieux naturels autour du site : 
- Végétations herbacées (inférieures à 1m), 
- Haies
- Milieux humides/marécageux...
` }
      </p>
      <NavLink activeClassName="active" to="/milieuxrestaures">
        <button className="rehab-button" type="button"> Voir toutes les friches réhabilitées </button>
      </NavLink>
      <hr />
    </div>
  );
}

export default Rehab;
