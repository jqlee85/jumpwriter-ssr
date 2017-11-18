export function userLogin(){
  return { 
    type: 'USER_LOG_IN'
  }
}

export function userLoginSuccess(loginInfo){
  return { 
    type: 'USER_LOG_IN_SUCCESS', 
    payload: loginInfo 
  }
}

export function userLoginError(loginInfo){
  return { 
    type: 'USER_LOG_IN_ERROR', 
    payload: loginInfo 
  }
}

export const requestUserLogin = (userName, password) => (dispatch, getState) => {
  dispatch(userLogin());
  return fetch("https://api.jumpwriter.com/wp-json/jwt-auth/v1/token/?username="+userName+"&password="+password,
  {method:'post'})
    .then(response => response.json())
    .then(userAuth => dispatch(userLoginSuccess(userAuth)))
    .catch(err => dispatch(userLoginError(err)));
};
