import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel } from 'react-responsive-carousel';
import { asyncFetchWastelandsInRes } from '../../actions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './RehabTotal.scss';


class RehabTotal extends Component {
  componentDidMount() {
    const { asyncFetchWastelandsInRes } = this.props;
    asyncFetchWastelandsInRes();
  }

  render() {
    const { rehabWastelands, loading, error } = this.props;
    return (
      <div className="RehabTotal">
        <div className="header-rehab">
          <h1>Milieux Restaurés</h1>
          <p>
     Découvre ici le fruit d&apos;efforts collectifs
     qui ont permis de rehabiliter des sites endommagés
          </p>
        </div>
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
          rehabWastelands.map(wasteland => (
            <div className="placement-rehab" key={wasteland.id}>
              <h2>{wasteland.name}</h2>
              <Carousel showThumbs={false} infiniteLoop autoPlay>
                <div className="container-rehab">
                  <img src={`/images/${wasteland.picture1}`} alt="imgBefore" />
                  <p className="legend">Avant réhabilitation</p>
                </div>
                <div className="container-rehab">
                  <img src={`/images/${wasteland.rehabPicture}`} alt="imgAfter" />
                  <p className="legend">Après réhabilitation</p>
                </div>
              </Carousel>
              <p>{wasteland.description_rehab}</p>
              <hr />
            </div>
          ))
          }
      </div>
    );
  }
}


const mstp = state => ({
  loading: state.rehabWastelands.loading,
  rehabWastelands: state.rehabWastelands.list,
  error: state.rehabWastelands.error,
});
const mdtp = dispatch => bindActionCreators({ asyncFetchWastelandsInRes }, dispatch);

export default connect(mstp, mdtp)(RehabTotal);
