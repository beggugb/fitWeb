const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        nombre: '',
        valor: 0,
        diario:false
    }    
  };
  
export function paquetes(state = initialState, action) {
    switch (action.type) {
      case "PAQUETES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "PAQUETES_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "PAQUETES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "PAQUETES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "PAQUETES_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "PAQUETES_RESET":
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
  