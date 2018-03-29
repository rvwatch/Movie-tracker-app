const errorReducer = (state = false, action) => {
  switch (action.type) {
    case 'INVALID_SIGNIN':
      return action.error;
    case 'VALID_SIGNIN':
      return action.error;
    default:
      return state;
  }
}

export default errorReducer;