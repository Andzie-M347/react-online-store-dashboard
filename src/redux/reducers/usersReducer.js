const initialState = {
  users: [],
  user: {},
  loading: true,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case 'DELETE_USER':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
