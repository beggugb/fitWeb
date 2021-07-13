const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
      orden: '',
      num: '',
      ivigencia: '',      
      fvigencia: '',
      ingresos:'',
      tipo:'normal',
      estado: false,
      renovacion: false,
      paqueteId:0,
      membresiaId:0,
      usuarioId:0,
      Paquete:{
        id:'',
        nombre:''
      }
    }    
  };
  
export function membresias(state = initialState, action) {
    switch (action.type) {
      case "MEMBRESIAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "MEMBRESIAS_ADD":
        return {
          ...state,
          item: action.response.membresia
        };
      case "MEMBRESIAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "MEMBRESIAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "MEMBRESIAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "RESET_MEMBRESIA":
        return {
          ...state,
          item: initialState.item
        };  
      default:
        return state;
    }
  }
  