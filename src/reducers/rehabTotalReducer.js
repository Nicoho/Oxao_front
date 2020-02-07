const initialState = {
  loading: false,
  list: [],
  error: '',
};

const rehabWastelands = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_REHABWASTELANDS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_REHABWASTELANDS': {
      return {
        loading: false,
        list: [...action.rehabWastelands],
        error: '',
      };
    }
    case 'FETCH_ERROR_REHABWASTELANDS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:

      return state;
  }
};

export default rehabWastelands;
