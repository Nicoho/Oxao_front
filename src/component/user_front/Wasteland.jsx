import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { urlApi } from '../../constants';

import InputsWasteland from '../../containers/user_front/InputsWasteland';
import './Wasteland.scss';

class Wasteland extends Component {
  handleSubmitWasteland = (values) => {
    const {
      picture1, picture2, picture3, ...body
    } = values;
    const data = new FormData();
    data.append('photos[]', picture1);
    data.append('photos[]', picture2);
    data.append('photos[]', picture3);
    data.append('form', JSON.stringify(body));

    axios.post(`${urlApi}/wastelands/`, data)
      .then((res) => {
        if (res.error) {
          NotificationManager.error('', 'Erreur sur l\' ajout de la friche', 1000);
        } else {
          NotificationManager.success('', 'Friche soumise. Merci de votre participation!', 1000);
        }
      });
  };

  render() {
    return (
      <div className="Wasteland" id="balance">
        <h2 className="title">Balance ta friche !</h2>
        <InputsWasteland onSubmit={this.handleSubmitWasteland} />
        <NotificationContainer />
      </div>
    );
  }
}

export default Wasteland;
