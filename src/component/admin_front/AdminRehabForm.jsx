import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { bindActionCreators } from 'redux';
import { getWastelandToValid, clearWasteland } from '../../actions';
import { urlApi } from '../../constants';

import './AdminRehabForm.scss';

class AdminRehabForm extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getWastelandToValid } = this.props;
    getWastelandToValid(id);
  }

  componentWillUnmount() {
    const { clearWasteland } = this.props;
    clearWasteland();
  }

  putRehabToValid = (values) => {
    const { history } = this.props;
    const { id, rehabPicture, ...body } = values;

    const data = new FormData();
    data.append('photo', rehabPicture);
    data.append('form', JSON.stringify(body));

    axios.put(`${urlApi}/wastelands/rehab/${id}`, data)
      .then((res) => {
        if (res.error) {
          NotificationManager.error('', 'Erreur sur l\' ajout de la friche', 1000);
        } else {
          NotificationManager.success('', 'Friche soumise. Merci de votre participation!', 1000);
          setTimeout(() => {
            history.push('/adminhome');
          }, 1000);
        }
      });
  };


  render() {
    const {
      handleSubmit, initialValues: { picture1 },
    } = this.props;

    const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

    const FileInput = ({
      input: {
        value: omitValue,
        onChange,
        onBlur,
        ...inputProps
      },
      meta: omitMeta,
      ...props
    }) => (
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...inputProps}
        {...props}
      />
    );
    return (
      <fieldset className="AdminRehabForm">
        <legend>Friche restaurée</legend>

        <form onSubmit={handleSubmit(this.putRehabToValid)}>
          <figure className="wastelandImg">
            <img src={`/images/${picture1}`} alt="Prise de vue absente" name="picture1" />
          </figure>

          <div className="placement-text">
            <p>{picture1}</p>
            <label htmlFor="upload">
            Téléchargez votre photo de friche réhabilitée :
              <Field
                name="rehabPicture"
                id="upload"
                component={FileInput}
                type="file"
              />
            </label>
            <Field
              name="id"
              id="id"
              component="input"
              type="hidden"
            />

            <label htmlFor="name">
            Nom de la friche :
              <Field
                name="name"
                id="name"
                component="input"
                type="text"
              />
            </label>

            <label htmlFor="description_rehab">
            Description de la friche restaurée :
              <Field
                name="description_rehab"
                id="description_rehab"
                component="textarea"
                type="text"
              />
            </label>

            <button type="submit">Valider les modifications</button>
            <NotificationContainer />
          </div>
        </form>
      </fieldset>
    );
  }
}

const mstp = ({ wasteland: { wasteland } }) => ({
  initialValues: {
    id: wasteland.id,
    name: wasteland.name,
    picture1: wasteland.picture1,
    description_rehab: wasteland.description_rehab,
    rehabPicture: '',
  },
});

const mdtp = dispatch => bindActionCreators({
  getWastelandToValid, clearWasteland,
}, dispatch);

export default connect(mstp, mdtp)(
  reduxForm({
    form: 'adminRehabForm',
    keepDirtyOnReinitialize: true,
    enableReinitialize: true,
  })(withRouter(AdminRehabForm)),
);
