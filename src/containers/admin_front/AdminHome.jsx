import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchwastelands, validasyncFetchwastelands } from '../../actions';

import DataSearch from './DataSearch';
import ResumeWasteland from './ResumeWasteland';

import './AdminHome.scss';

const newWastelandTitle = 'Nouvelles friches';
const allWastelandTitle = 'Toutes les friches';

class AdminHome extends Component {
  componentDidMount() {
    this.getNewWastlands();
  }

  getAllWastelands = () => {
    const { asyncFetchwastelands } = this.props;
    asyncFetchwastelands(allWastelandTitle);
  }

  getNewWastlands = () => {
    const { validasyncFetchwastelands } = this.props;
    validasyncFetchwastelands(newWastelandTitle);
  }

  render() {
    const {
      wastelands, loading, error, title,
    } = this.props;
    return (
      <div className="AdminHome">
        <div>
          <img src="/images/leaf-icon.svg" alt="feuille" className="leaf" />
        </div>

        <DataSearch />
        {
          (title === newWastelandTitle)
            ? <button type="button" onClick={this.getAllWastelands}>Afficher toutes les friches</button>
            : <button type="button" onClick={this.getNewWastlands}>Afficher les nouvelles friches</button>
        }
        <h2>
          {title}
        </h2>
        {
          (loading)
            ? <div>Chargement en cours veuillez patienter...</div>
            : ''
        }
        {
          (error !== '')
            ? <div>{error}</div>
            : ''
        }
        {
          wastelands.map(wasteland => (
            <ResumeWasteland key={wasteland.id} wasteland={wasteland} />
          ))
        }
      </div>
    );
  }
}

const mstp = state => ({
  loading: state.wastelands.loading,
  wastelands: state.wastelands.list,
  error: state.wastelands.error,
  title: state.wastelands.title,
});

const mdtp = dispatch => bindActionCreators({
  asyncFetchwastelands,
  validasyncFetchwastelands,
}, dispatch);

export default connect(mstp, mdtp)(AdminHome);
