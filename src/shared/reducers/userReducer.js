const userState = {
  auth_status: 'logged_out',
  logged_in: false
}

// Reducer
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'USER_LOG_IN_ATTEMPT':
      return { 
        ...state,
        auth_status: 'attempting'
      };
    case 'USER_LOG_IN_SUCCESS':
      return { 
        ...state,
        auth_status: 'logged_in',
        logged_in: true,
        data: action.payload
      };
    case 'USER_LOG_IN_ERROR':
    return { 
      ...state,
      auth_status: 'failed',
      data: action.payload
    };
    default:
      return state;
  }
}

export default userReducer;