import React from 'react';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import DispGeoloc from '../../component/user_front/DispGeoloc';
import './Geoloc.scss';

class Geoloc extends React.Component {
  constructor(props) {
    super(props);
    this.geoloc = React.createRef();
    this.getGeoloc = this.getGeoloc.bind(this);
  }

  getGeoloc() {
    this.geoloc.current.getLocation();
    NotificationManager.success('', 'Géolocalisation réussie', 3000);
  }

  setCoords = ({ coords }) => {
    const { dispatch } = this.props;
    dispatch(change('wastelandForm', 'latitude', coords.latitude));
    dispatch(change('wastelandForm', 'longitude', coords.longitude));
  }

  render() {
    return (
      <div className="Geoloc">
        <button type="button" onClick={this.getGeoloc}>
          <i className="fa fa-location-arrow" style={{ fontSize: '80px' }} />
        </button>
        <p className="position-desc">
           Géolocalise ta friche !
        </p>
        <DispGeoloc ref={this.geoloc} onSuccess={this.setCoords} />
        <NotificationContainer />
      </div>
    );
  }
}

export default connect()(Geoloc);
