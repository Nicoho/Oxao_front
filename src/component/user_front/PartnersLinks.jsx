import React from 'react';
import './PartnersLinks.scss';

function PartnersLinks() {
  return (
    <div className="PartnersLinks">
      <h2>Nos partenaires</h2>
      <li>
        <a href="https://www.afbiodiversite.fr/" target="_blank" rel="noopener noreferrer">
          <img src="/images/ademe.png" alt="Ademe" />
        </a>
        <a href="https://www.ademe.fr/expertises/sols-pollues" target="_blank" rel="noopener noreferrer">
          <img src="/images/afp.png" alt="afbiodiversite" />
        </a>
        <a href="https://www.nouvelle-aquitaine.fr/" target="_blank" rel="noopener noreferrer">
          <img src="/images/na.jpg" alt="Nouvelle Aquitaine" />
        </a>
      </li>
    </div>
  );
}

export default PartnersLinks;
