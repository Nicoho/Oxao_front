import React from 'react';
import { Field } from 'redux-form';
import './AdminOwnerDisplay.scss';

function AdminOwnerDisplay() {
  return (
    <fieldset className="AdminOwnerDisplay">
      <legend>Propriétaire</legend>

      <div>
        <img src="/images/leaf-icon.svg" alt="feuille" className="leaf" />
      </div>

      <label htmlFor="owner_civility">
        Civilité
        <Field
          name="owner_civility"
          id="owner_civility"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="owner_firstname">
        Prénom
        <Field
          name="owner_firstname"
          id="owner_firstname"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="owner_lastname">
        Nom
        <Field
          name="owner_lastname"
          id="owner_lastname"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="owner_company">
        Entreprise
        <Field
          name="owner_company"
          id="owner_company"
          component="input"
          type="text"
        />
      </label>

      <label htmlFor="owner_email">
        Courriel
        <Field
          name="owner_email"
          id="owner_email"
          component="input"
          type="email"
        />
      </label>
      <label htmlFor="owner_phone">
        Téléphone
        <Field
          name="owner_phone"
          id="owner_phone"
          component="input"
          type="tel"
        />
      </label>
      <label htmlFor="owner_comment">
        Commentaires
        <Field
          name="owner_comment"
          id="owner_comment"
          component="textarea"
          type="text"
        />
      </label>
    </fieldset>
  );
}

export default AdminOwnerDisplay;
