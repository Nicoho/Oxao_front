import { urlApi } from '../constants';
import {
  startFetchwastelands,
  fetchSuccesswastelands,
  fetchErrorwastelands,
} from './index';

export const searchDropdown = searchDropdown => ({
  type: 'SEARCH_DROPDOWN',
  searchDropdown,
});

export const searchInput = searchInput => ({
  type: 'SEARCH_INPUT',
  searchInput,
});

export const searchAsyncFetchwastelands = (searchKey, searchValue, title) => (
  (dispatch) => {
    dispatch(startFetchwastelands());
    fetch(`${urlApi}/wastelands/search?${searchKey}=${searchValue}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then((wastelands) => {
        dispatch(fetchSuccesswastelands(wastelands, title));
      })
      .catch((error) => {
        if (error.message === '501') {
          dispatch(fetchErrorwastelands('Sélectionnez un paramètre valide'));
        } else {
          dispatch(fetchErrorwastelands('Erreur lors du chargement des friches'));
        }
      });
  }
);
