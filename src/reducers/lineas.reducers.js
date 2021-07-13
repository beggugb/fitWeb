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
  
export function lineas(state = initialState, action) {
    switch (action.type) {
      case "LINEAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };      
      case "LINEAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "LINEAS_DATA":
          return {
            ...state,
            data: action.response
          };            
      case "LINEAS_RESET":
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
  