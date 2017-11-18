const userState = {
  menuToggled: false
}

// Reducer
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      return { 
        ...state,
        menuToggled: !state.menuToggled
      };
    default:
      return state;
  }
}

export default userReducer;