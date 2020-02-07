import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './ResumeWasteland.scss';

function ResumeWasteland({
  wasteland,
}) {
  return (
    <div className="ResumeWasteland">
      <p>
        <span className="resumeKey">
          Nom:&nbsp;
        </span>
        { wasteland.name
         || 'non défini'
      }
      </p>
      <p>
        <span className="resumeKey">
          Date de soumission:&nbsp;
        </span>
        {moment(wasteland.date).format('DD MMMM YYYY')}
      </p>
      <p>
        <span className="resumeKey">
          Commune:&nbsp;
        </span>
        { wasteland.municipality
          || 'non défini'
      }
      </p>
      <NavLink activeClassName="active" to={`/adminwasteland/${wasteland.id}`}>
        <button type="button" className="ResumeButton">Voir</button>
      </NavLink>
    </div>
  );
}

export default ResumeWasteland;
