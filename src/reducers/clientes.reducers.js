const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    item:{
      nombres: '',
      direccion: '',
      telefono: '',      
      email: '',
      nit:'',
      ci:'',
      celular: '',
      filename: 'default.jpg',
      estado: true,
      ciudad: '',
      pais: '',
      tipo: '',
      isCliente: true,
      fnacimiento:'',
      sexo:''
    }    
  };
  
export function clientes(state = initialState, action) {
    switch (action.type) {
      case "CLIENTES_VIEW":
        return {
          ...state,
          modalView: action.view
        }; 
      case "CLIENTES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "CLIENTES_ADD":
        return {
          ...state,
          item: action.response.cliente
        };
      case "CLIENTES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "CLIENTES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "CLIENTES_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "CLIENTES_RESET_ITEM":
        return {
          ...state,
          item: initialState.item          
        };  
      default:
        return state;
    }
  }
  