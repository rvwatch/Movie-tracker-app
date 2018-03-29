const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...action.user};
    default:
      return state;
  }
}

export default usersReducer;