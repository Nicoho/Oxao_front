import { urlApi } from '../constants';

export const startFetchwastelands = () => ({
  type: 'START_FETCH_WASTELANDS',
});

export const fetchSuccesswastelands = (wastelands, title) => ({
  type: 'FETCH_SUCCESS_WASTELANDS',
  wastelands,
  title,
});

export const fetchErrorwastelands = err => ({
  type: 'FETCH_ERROR_WASTELANDS',
  err,
});

export const startFetchWastelandsInRes = () => ({
  type: 'START_FETCH_REHABWASTELANDS',
});

export const fetchSuccessWastelandsInRes = rehabWastelands => ({
  type: 'FETCH_SUCCESS_REHABWASTELANDS',
  rehabWastelands,
});

export const fetchErrorWastelandsInRes = err => ({
  type: 'FETCH_ERROR_REHABWASTELANDS',
  err,
});

export const fetchSuccesMapWastelands = mapWastelands => ({
  type: 'FETCH_SUCCESS_MAPWASTELANDS',
  mapWastelands,
});

export const startFetchMapWastelands = () => ({
  type: 'START_FETCH_MAPWASTELANDS',
});


export const startFetchwasteland = () => ({
  type: 'START_FETCH_WASTELAND',
});

export const fetchSuccessWasteland = wasteland => ({
  type: 'FETCH_SUCCESS_WASTELAND',
  wasteland,
});

export const fetchErrorwasteland = err => ({
  type: 'FETCH_ERROR_WASTELAND',
  err,
});

export const fecthDeleteWasteland = wasteland => ({
  type: 'FETCH_DELETE_WASTELAND',
  wasteland,
});

export const userRegister = user => ({
  type: 'USER_REGISTER',
  user,
});

export const clearWasteland = () => ({
  type: 'CLEAR_WASTELAND',
});

export const asyncFetchwastelands = title => (
  (dispatch) => {
    dispatch(startFetchwastelands());
    fetch(`${urlApi}/wastelands`)
      .then(res => res.json())
      .then((wastelands) => {
        dispatch(fetchSuccesswastelands(wastelands, title));
      })
      .catch(() => {
        dispatch(fetchErrorwastelands('Erreur lors du chargement des friches'));
      });
  }
);

export const validasyncFetchwastelands = title => (
  (dispatch) => {
    dispatch(startFetchwastelands());
    fetch(`${urlApi}/wastelands?state=val`)
      .then(res => res.json())
      .then((wastelands) => {
        dispatch(fetchSuccesswastelands(wastelands, title));
      })
      .catch(() => {
        dispatch(fetchErrorwastelands('Erreur lors du chargement des friches à valider'));
      });
  }
);

export const getWastelandToValid = id => (dispatch) => {
  (startFetchwasteland());
  fetch(`${urlApi}/wastelands/${id}`)
    .then(res => res.json())
    .then((wasteland) => {
      dispatch(fetchSuccessWasteland(wasteland));
    })
    .catch(() => {
      dispatch(fetchErrorwasteland('Erreur lors du chargement des friches'));
    });
};

export const asyncFetchWastelandsInRes = () => (
  (dispatch) => {
    dispatch(startFetchWastelandsInRes());
    fetch(`${urlApi}/wastelands?state=res`)
      .then(res => res.json())
      .then((rehabWastelands) => {
        dispatch(fetchSuccessWastelandsInRes(rehabWastelands));
      })
      .catch(() => {
        dispatch(fetchErrorWastelandsInRes('Erreur lors du chargement des friches'));
      });
  }
);

export const fetchMapWastelands = () => (
  (dispatch) => {
    dispatch(startFetchMapWastelands());
    fetch(`${urlApi}/wastelands/map`)
      .then(res => res.json())
      .then((mapWastelands) => {
        dispatch(fetchSuccesMapWastelands(mapWastelands));
      });
  }
);
