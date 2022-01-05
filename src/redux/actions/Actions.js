const setMode = (mode) => {
  return {
    type: 'SET_MODE',
    payload: mode,
  };
};

const setColor = (color) => {
  return {
    type: 'SET_COLOR',
    payload: color,
  };
};

const getTheme = () => {
  return {
    type: 'GET_THEME',
  };
};

const getUsers = (users) => {
  return {
    type: 'GET_USERS',
    payload: users,
  };
};

const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    payload: id,
  };
};

const actions = {
  setMode,
  setColor,
  getTheme,
  getUsers,
  deleteUser,
};

export default actions;
