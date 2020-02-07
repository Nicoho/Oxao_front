import React from 'react';
import ModalsVideo from './ModalsVideo';
import './HomeElements.scss';

function HomeElements() {
  return (
    <div className="HomeElements">
      <div className="description">
        <p className="title">
      Bienvenue sur Balance Ta Friche !
        </p>
        <p>
          Tu pourras ici apporter ton aide à la
          <span> renaturation </span>
           de notre territoire!
      Les friches industrielles ou naturelles sont omniprésentes autour de nous.
        </p>
        <p>
      On te propose donc de
          <span> participer </span>
       à leur identification pour qu&apos;un projet de
      renaturation ait lieu sur le ou les sites que tu auras
          <span> identifié.</span>
      D&apos;autres l&apos;ont déja fait, regarde donc sur la carte!
      Si tout le monde s&apos;y met,
      on pourra retrouver plus de biodiversité et ainsi plus de
          <span> bien-être </span>
        , à commencer par toi!
        </p>
      </div>
      <div>
        <br />
        <ModalsVideo />
        <br />
      </div>
    </div>
  );
}

export default HomeElements;
