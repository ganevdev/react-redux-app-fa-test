const baseState = {
  page: 1,
  totalPages: [1],
  users: [],
  loading: false,
};

const reducer = (state = baseState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, loading: true };
    case 'USERS_RECEIVED':
      return {
        ...state,
        page: action.json.page,
        totalPages: [...Array(action.json.total_pages + 1).keys()].slice(1),
        users: action.json.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
