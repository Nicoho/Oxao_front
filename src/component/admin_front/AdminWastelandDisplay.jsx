import React from 'react';
import { Field } from 'redux-form';
import './AdminWastelandDisplay.scss';

function AdminWastelandDisplay({ picture1, picture2, picture3 }) {
  return (
    <fieldset className="AdminWastelandDisplay">
      <legend>Friche</legend>

      <div>
        <img src="/images/leaf-icon.svg" alt="feuille" className="leaf" />
      </div>

      <div className="wastelandDisplay">

        <Field
          name="id"
          id="id"
          component="input"
          type="hidden"
        />

        <label htmlFor="name" className="labelField" />
        <p>Nom de la friche</p>
        <Field
          name="name"
          id="name"
          component="input"
          type="text"
          className="adminField"
        />

        <figure>
          <img src={`/images/${picture1}`} alt="pas de photo1" name="picture1" className="wastelandImg" />
        </figure>
        <p>
          photo1:
          {picture1}
        </p>
        <figure>
          <img src={`/images/${picture2}`} alt="pas de photo2" name="picture2" className="wastelandImg" />
        </figure>
        <p>
          photo2:
          {picture2}
        </p>
        <figure>
          <img src={`/images/${picture3}`} alt="pas de photo3" name="picture3" className="wastelandImg" />
        </figure>
        <p>
          photo3:
          {picture3}
        </p>

        <label htmlFor="state" className="labelField" />
        <p>État de la friche</p>
        <br />
        <Field name="state" id="state" component="select" className="adminField">
          <option defaultValue value="val">À valider</option>
          <option value="ok">Validée</option>
        </Field>

        <label htmlFor="date" className="labelField" />
        <p>Date</p>
        <Field
          name="date"
          id="date"
          component="input"
          type="date"
          className="adminField"
        />

        <label htmlFor="comment" className="labelField" />
        Description
        <Field
          name="comment"
          id="comment"
          component="textarea"
          type="text"
          className="adminField"
        />

        <label htmlFor="department" className="labelField" />
        Département
        <Field
          name="department"
          id="department"
          component="input"
          type="text"
          className="adminField"
        />

        <label htmlFor="municipality" className="labelField" />
        Commune
        <Field
          name="municipality"
          id="municipality"
          component="input"
          type="text"
          className="adminField"
        />
      </div>
    </fieldset>
  );
}

export default AdminWastelandDisplay;
