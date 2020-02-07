import React, { Component } from 'react';
import { reduxForm, FormSection } from 'redux-form';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import AdminWastelandDisplay from './AdminWastelandDisplay';
import AdminTypeDisplay from './AdminTypeDisplay';
import AdminUserDisplay from './AdminUserDisplay';
import AdminOwnerDisplay from './AdminOwnerDisplay';
import { getWastelandToValid, clearWasteland } from '../../actions';
import { urlApi } from '../../constants';

import 'react-confirm-alert/src/react-confirm-alert.css';

class AdminWastelandForm extends Component {
  componentDidMount() {
    const { getWastelandToValid, id } = this.props;
    getWastelandToValid(id);
  }

  componentWillUnmount() {
    const { clearWasteland } = this.props;
    clearWasteland();
  }

  updateWasteland = (values) => {
    const { history, id } = this.props;
    const { wasteland } = values;
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wasteland),
    };

    fetch(`${urlApi}/wastelands/${id}`, config)
      .then((res) => {
        if (res.error) {
          NotificationManager.error('', 'Erreur sur la modification de la friche', 1000);
        } else {
          NotificationManager.success('', 'Friche modifiée', 1000);
          setTimeout(() => {
            history.push('/adminhome');
          }, 1000);
        }
      });
  }

  handleClick = () => {
    confirmAlert({
      title: 'Confirmation de suppression',
      message: 'Etes-vous sûr?',
      buttons: [
        {
          label: 'oui',
          onClick: () => this.deleteWasteland(),
        },
        {
          label: 'non',
          onClick: () => 'annulation de la suppression',
        },
      ],
    });
  }

  deleteWasteland = () => {
    const { id, history } = this.props;
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${urlApi}/wastelands/${id}`, config)
      .then((res) => {
        if (res.error) {
          NotificationManager.error('', 'Erreur sur la suppression de la friche', 1000);
        } else {
          NotificationManager.success('', 'Friche supprimée de la base de donnée', 1000);
          setTimeout(() => {
            history.push('/adminhome');
          }, 1000);
        }
      });
  }

  render() {
    const {
      handleSubmit, initialValues: {
        wasteland: {
          picture1,
          picture2,
          picture3,
        },
      },
    } = this.props;
    return (
      <div>

        <form onSubmit={handleSubmit(this.updateWasteland)}>
          <FormSection name="wasteland">
            <AdminWastelandDisplay picture1={picture1} picture2={picture2} picture3={picture3} />
          </FormSection>

          <FormSection name="wasteland">
            <AdminTypeDisplay />
          </FormSection>
          <FormSection name="wasteland">
            <AdminUserDisplay />
          </FormSection>
          <FormSection name="wasteland">
            <AdminOwnerDisplay />
          </FormSection>
          <NotificationContainer />
          <button type="submit">Valider</button>
          <button type="button" onClick={this.handleClick}>Supprimer</button>
          <NotificationContainer />
        </form>
      </div>
    );
  }
}

const mstp = ({ wasteland: { wasteland } }) => ({
  initialValues: {
    wasteland: {
      ...wasteland,
      date: moment(wasteland.date).format('YYYY-MM-DD'),
    },
  },
});

const mdtp = dispatch => bindActionCreators({
  getWastelandToValid, clearWasteland,
}, dispatch);

export default connect(mstp, mdtp)(
  reduxForm({
    form: 'adminWastelandForm',
    keepDirtyOnReinitialize: true,
    enableReinitialize: true,
  })(withRouter(AdminWastelandForm)),
);
