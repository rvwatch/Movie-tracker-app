const usersReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return { ...action.user };
  case 'SIGN_IN':
    return { 
      name: action.user.name, 
      email: action.user.email, 
      id: action.user.id 
    };
  case 'LOGOUT_USER':
    return {};
  default:
    return state;
  }
};

export default usersReducer;
