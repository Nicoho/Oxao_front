import React from 'react';
import './Mail.scss';

function Mail() {
  return (
    <div className="Mail" id="contact">
      <h2>Contactez-Nous</h2>
      <a href="mailto:mathias.gaillard@oxao.fr">
        <p>Cliquez-ici pour nous contacter</p>
        <i className="fa fa-envelope" style={{ fontSize: '1.75em', color: '#719499' }} />
      </a>
    </div>
  );
}

export default Mail;
