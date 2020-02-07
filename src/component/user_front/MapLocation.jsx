import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { fetchMapWastelands } from '../../actions';
import './MapLocation.scss';


const greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

class MapLocation extends Component {
  componentDidMount() {
    const { fetchMapWastelands } = this.props;
    fetchMapWastelands();
  }

  render() {
    const position = [44.8415, -0.5610];
    const { mapWastelands } = this.props;
    return (
      <div>
        <h2 className="title">Un aperçu géographique ..</h2>
        <div className="map-container" style={{ zIndex: -5 }}>
          <Map
            style={
          {
            width: '300px',
            height: '300px',
            margin: 'auto',
          }}
            center={position}
            zoom={6}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {mapWastelands.map(mapWastelands => (
              <Marker
                key={mapWastelands.id}
                position={[mapWastelands.latitude, mapWastelands.longitude]}
                icon={mapWastelands.state === 'ok' ? redIcon : greenIcon}
              />
            ))}
          </Map>
          <div className="group-icon">
            <p>
              <img className="size-icon" src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" alt="redicon" />
         :
         friches en cours de réhabilitation
            </p>
            <p className="position-text">
              <img className="green-icon" src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" alt="greenicon" />
         :
         friches réhabilitées
            </p>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}


const mstp = state => ({
  loading: state.mapWastelands.loading,
  mapWastelands: state.mapWastelands.list,
});
const mdtp = dispatch => bindActionCreators({ fetchMapWastelands }, dispatch);

export default connect(mstp, mdtp)(MapLocation);
