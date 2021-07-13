const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:'',
        nombre: '',
        username: '',
        password:'',                
        enabled:false,
        rolId: 0,
        sucursalId:0,
        Rol:{
          id:'',
          nombre:''
        }
    }    
  };
  
export function usuarios(state = initialState, action) {
    switch (action.type) {
      case "USUARIOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "USUARIOS_ADD":
        return {
          ...state,
          data: action.response.data,
          pagina: action.response.pagina,
          paginas: action.response.paginas,
          total: action.response.total,
          item: initialState.item
        };
      case "USUARIOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "USUARIOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };    
      case "USUARIOS_LISTA":
            return {
              ...state,
              data: action.response
            };            
      case "USUARIOS_RESET":
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
  