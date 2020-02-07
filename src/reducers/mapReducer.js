const initialState = {
  loading: false,
  list: [],
};

const mapWastelands = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_MAPWASTELANDS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_MAPWASTELANDS': {
      return {
        loading: false,
        list: [...action.mapWastelands],
      };
    }
    default:

      return state;
  }
};

export default mapWastelands;
