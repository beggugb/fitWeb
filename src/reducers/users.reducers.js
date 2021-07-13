/*let user  = JSON.parse(localStorage.getItem('user'));*/

/*let token = JSON.parse(localStorage.getItem('token'));

let items = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')):[]*/
/*
let userId = 0;
let vusername = false;

const initialState = user ? { 
  modalRegister:false, 
  loggedIn:true      } : { userId, vusername };
*/


const initialState = { 
  user : {}
 } 

export function users(state = initialState, action) {
  switch (action.type) {             
    case 'LOGIN_SUCCESS':
      return {        
        ...state, 
          loggingIn: true,
          user: action.response
      };
    case 'LOGIN_USER':
      return {           
          ...state
      };
    case 'LOGIN_LOGOUT':
      return {           
          
      };                                          
    default:
      return state
  }
}

