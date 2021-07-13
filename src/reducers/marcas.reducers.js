const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        name: ''        
    }    
  };
  
export function marcas(state = initialState, action) {
    switch (action.type) {
      case "MARCAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };      
      case "MARCAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "MARCAS_DATA":
          return {
            ...state,
            data: action.response
          };            
      case "MARCAS_RESET":
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
  