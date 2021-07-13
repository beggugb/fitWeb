const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:'',
        nombre: '',
        direccion: '',
        responsable: '',
        telefono: '',
        empresaId: 1
    }    
  };
  
export function sucursales(state = initialState, action) {
    switch (action.type) {
      case "SUCURSALES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "SUCURSALES_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "SUCURSALES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "SUCURSALES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "SUCURSALES_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "SUCURSALES_RESET":
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
  