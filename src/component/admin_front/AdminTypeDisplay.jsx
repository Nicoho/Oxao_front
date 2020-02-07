import React from 'react';
import { Field } from 'redux-form';
import './AdminTypeDisplay.scss';


function AdminTypeDisplay() {
  return (
    <fieldset className="AdminTypeDisplay">
      <legend>Type de friche</legend>

      <div>
        <img src="/images/leaf-icon.svg" alt="feuille" className="leaf" />
      </div>

      <Field name="environment" id="environment" component="select">
        <option defaultValue value="Type de milieu">Type de milieu</option>
        <option value="Forêt">Forêt</option>
        <option value="Prairie">Prairie</option>
        <option value="Rivière/eau">Rivière/eau</option>
      </Field>

      <Field name="pollution" id="pollution" component="select">
        <option defaultValue value="Type de pollution">Type de pollution</option>
        <option value="Polluants et pesticides">Polluants et pesticides</option>
        <option value="Déchets / Gravats">Déchets / Gravats</option>
        <option value="Canalisation /Bétonisation">Canalisation /Bétonisation</option>
        <option value="Agriculture intensive">Agriculture intensive</option>
        <option value="Site industriel / Parking">Site industriel / Parking</option>
      </Field>

      <Field name="surface" id="surface" component="select">
        <option defaultValue value="Superficie">Superficie</option>
        <option value="Entre 0 et 1ha">entre 0 et 1ha</option>
        <option value="Entre 1 et 10ha">entre 1 et 10ha</option>
        <option value="Plus de 10ha">plus de 10ha</option>
      </Field>

      <Field name="rehab" id="rehab" component="select">
        <option defaultValue value="Type de réhabilitation">Type de réhabilitation</option>
        <option value="Dépollution">Dépollution</option>
        <option value="Reméandrage">Reméandrage</option>
        <option value="Arrachage / Invasif">Arrachage/Invasif</option>
        <option value="Réouverture">Réouverture</option>
        <option value="Reboisement">Reboisement</option>
      </Field>
    </fieldset>
  );
}

export default AdminTypeDisplay;
