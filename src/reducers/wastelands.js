const initialState = {
  loading: false,
  list: [],
  error: '',
  title: '',
};

const wastelands = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_WASTELANDS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_WASTELANDS': {
      return {
        loading: false,
        list: [...action.wastelands],
        error: '',
        title: action.title,
      };
    }
    case 'FETCH_ERROR_WASTELANDS': {
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

export default wastelands;
