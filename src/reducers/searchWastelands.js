const initialState = {
  searchDropdown: 'criterion',
  searchInput: '',
};

const searchWastelands = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_DROPDOWN': {
      return {
        ...state,
        searchDropdown: action.searchDropdown,
      };
    }
    case 'SEARCH_INPUT': {
      return {
        ...state,
        searchInput: action.searchInput,
      };
    }
    default:
      return state;
  }
};

export default searchWastelands;
