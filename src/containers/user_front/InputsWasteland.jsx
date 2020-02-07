import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Geoloc from './Geoloc';
import Camera from './Camera';
import './InputsWasteland.scss';


function InputsWasteland(props) {
  const { handleSubmit } = props;
  return (
    <form className="InputsWasteland" onSubmit={handleSubmit}>
      <div className="placement">
        <Camera />
        <br />
        <Geoloc />
      </div>
      <div>
        <label htmlFor="comment">
          <p>Description</p>
          <Field
            id="comment"
            name="comment"
            component="textarea"
            type="text"
            placeholder="Type de milieu, superficie approximative, type de dégradation observée etc&hellip;)"
          />
        </label>
      </div>
      <div>
        <Field className="option-color" id="surface" name="surface" component="select">
          <option defaultValue>Superficie</option>
          <option>Entre 0 et 1ha</option>
          <option>Entre 1 et 10ha</option>
          <option>Plus de 10ha</option>
        </Field>
      </div>
      <div>
        <Field className="option-color" id="environment" name="environment" component="select">
          <option defaultValue>Type de milieu</option>
          <option>Forêt</option>
          <option>Prairie</option>
          <option>Rivière/eau</option>
        </Field>
      </div>
      <div>
        <label htmlFor="owner_comment">
          <p>Informations sur le propriétaire (facultatif)</p>
          <Field
            id="owner_comment"
            name="owner_comment"
            component="input"
            type="text"
            placeholder="Nom du propriétaire"
          />
        </label>
      </div>
      <div>
        <p>Si vous souhaitez être recontacté, renseignez les champs ci-dessous&nbsp;:</p>
        <label htmlFor="user_lastname">
          <p>Votre nom</p>
          <Field
            id="user_lastname"
            name="user_lastname"
            component="input"
            type="text"
            placeholder="Nom"
          />
        </label>
      </div>
      <div>
        <label htmlFor="user_firstname">
          <p>Votre prénom</p>
          <Field
            id="user_firstname"
            name="user_firstname"
            component="input"
            type="text"
            placeholder="Prénom"
          />
        </label>
      </div>
      <div>
        <label htmlFor="user_company">
          <p>Société</p>
          <Field
            id="user_company"
            name="user_company"
            component="input"
            type="text"
            placeholder="Entreprise"
          />
        </label>
      </div>
      <div>
        <label htmlFor="user_email">
          <p>Courriel</p>
          <Field
            id="user_email"
            name="user_email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </label>
      </div>
      <div>
        <label htmlFor="user_phone">
          <p>Téléphone</p>
          <Field
            id="user_phone"
            name="user_phone"
            component="input"
            type="tel"
            placeholder="Téléphone"
          />
        </label>
      </div>
      <button className="button-field" type="submit">Envoyer</button>
      <hr />
    </form>
  );
}

const mstp = () => ({
  initialValues: {
    user_firstname: 'Nicolas',
    user_lastname: 'Durand',
  },
});

export default reduxForm({
  form: 'wastelandForm',
})(InputsWasteland);
connect(mstp)(InputsWasteland);
