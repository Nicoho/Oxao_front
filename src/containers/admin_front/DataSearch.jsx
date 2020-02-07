import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchAsyncFetchwastelands, searchDropdown, searchInput } from '../../actions/searchFetch';

import './DataSearch.scss';

class DataSearch extends Component {
  searchWastelands = () => {
    const { searchAsyncFetchwastelands, searchValue, searchKey } = this.props;
    searchAsyncFetchwastelands(searchKey, searchValue, 'Résultats de la recherche');
  }

  render() {
    const {
      searchDropdown,
      searchInput,
    } = this.props;
    return (
      <div className="DataSearch">
        <select onChange={e => searchDropdown(e.target.value)}>
          <option value="criterion">Critère</option>
          <option name="name" value="name">Nom</option>
          <option name="state" value="state">Etat</option>
          <option name="environment" value="environment">Environnement</option>
          <option name="department" value="department">Département</option>
          <option name="municipality" value="municipality">Ville</option>
          <option name="pollution" value="pollution">Pollution</option>
          <option name="rehab" value="rehab">Réhabilitation</option>
        </select>

        <input onChange={e => searchInput(e.target.value)} />
        <button onClick={this.searchWastelands} type="button">Soumettre</button>
      </div>
    );
  }
}

const mstp = state => ({
  searchKey: state.searchWastelands.searchDropdown,
  searchValue: state.searchWastelands.searchInput,
});

const mdtp = dispatch => bindActionCreators({
  searchAsyncFetchwastelands,
  searchDropdown,
  searchInput,
}, dispatch);

export default connect(mstp, mdtp)(DataSearch);
