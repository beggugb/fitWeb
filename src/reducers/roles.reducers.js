const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        nameRol: ''        
    }    
  };
  
export function roles(state = initialState, action) {
    switch (action.type) {
      case "ROLES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };      
      case "ROLES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "ROLES_DATA":
          return {
            ...state,
            data: action.response
          };            
      case "ROLES_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
        
      default:
        return state;
    }
  }
  