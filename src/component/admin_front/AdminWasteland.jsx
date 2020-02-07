import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminWastelandForm from './AdminWastelandForm';
import './AdminWasteland.scss';

function AdminWasteland(props) {
  const { match: { params: { id } } } = props;
  return (
    <div className="AdminWasteland">
      <h2>
        Friche n°
        { id }
      </h2>
      <AdminWastelandForm id={id} />
      <NavLink to={`/adminrehabform/${id}`}>
        <button type="button">Finaliser la friche</button>
      </NavLink>
    </div>

  );
}

export default AdminWasteland;
