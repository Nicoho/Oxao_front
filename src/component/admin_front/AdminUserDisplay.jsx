import React from 'react';
import { Field } from 'redux-form';
import './AdminUserDisplay.scss';

function AdminUserDisplay() {
  return (
    <fieldset className="AdminUserDisplay">
      <legend>Utilisateur</legend>

      <div>
        <img src="/images/leaf-icon.svg" alt="feuille" className="leaf" />
      </div>

      <label htmlFor="user_civility">
        Civilité
        <Field
          id="user_civility"
          name="user_civility"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="user_firstname">
        Prénom
        <Field
          id="user_firstname"
          name="user_firstname"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="user_lastname">
        Nom
        <Field
          id="user_lastname"
          name="user_lastname"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="user_email">
        Courriel
        <Field
          id="user_email"
          name="user_email"
          component="input"
          type="email"
        />
      </label>

      <label htmlFor="user_phone">
        Téléphone
        <Field
          id="user_phone"
          name="user_phone"
          component="input"
          type="tel"
        />
      </label>

      <label htmlFor="user_company">
        Entreprise
        <Field
          id="user_company"
          name="user_company"
          component="input"
          type="text"
        />
      </label>
    </fieldset>
  );
}

export default AdminUserDisplay;
