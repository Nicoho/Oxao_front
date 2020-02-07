const initialState = {
  loading: false,
  wasteland: {},
  error: '',
};

const wasteland = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_WASTELAND': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_WASTELAND': {
      return {
        loading: false,
        wasteland: { ...action.wasteland },
        error: '',
      };
    }
    case 'FETCH_DELETE_WASTELAND': {
      return {
        loading: false,
        wasteland: { ...action.wasteland },
      };
    }
    case 'FETCH_ERROR_WASTELAND': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    case 'CLEAR_WASTELAND': {
      return { ...initialState };
    }
    default:
      return state;
  }
};


export default wasteland;
