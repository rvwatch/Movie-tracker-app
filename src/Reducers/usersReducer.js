const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...action.user};
    case 'SIGN_IN':
      const {name, email, id} = action.user
      return {name, email, id};
    default:
      return state;
  }
}

export default usersReducer;