import { userService } from "../services";
import {toastr} from 'react-redux-toastr'
import { history } from "../helpers";

export const userActions = {  
  login,
  logout,
};

function login(user) {
  return (dispatch) => {    
    userService
      .login(user)
      .then((response) => {                        
        if(response.user){          
          dispatch(LOGIN(response));
          history.push("/admin");
          toastr.success('Login', response.user.message)
        }else{
          toastr.error('Login', response.user.message)  
        }                
      })
      .catch((err) => {  
        toastr.error('Login', err)                
      });
  };
}

export function LOGIN(resp) {       
  return {
    type: "LOGIN_SUCCESS",
    response: resp.user.usuario
  };
}

function logout() {    
  return (dispatch) => {
    userService.logout();
    dispatch(loginOut());
    history.push("/admin");
  };
}

export function loginOut() {
  return {
    type: "LOGIN_LOGOUT",
  };
}
