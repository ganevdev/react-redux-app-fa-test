const getUsers = (page) => {
  return { type: 'GET_USERS', payload: { page: page } };
};

export { getUsers };
