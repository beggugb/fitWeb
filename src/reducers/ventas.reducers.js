const initialState = {
    items: [],    
    sumaTotal: 0,
    cantidadTotal:0,
    modalView: false,
    bandera: false       
  };
  
export function ventas(state = initialState, action) {
    switch (action.type) {
      case "VENTAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "VENTAS_RESET":
        return {          
          ...state,
          items:[],
          sumaTotal:0,
          cantidadTotal:0
        };
      case "VENTAS_VIEW":
        return {          
          ...state,
          modalView: action.view
        };        
      case 'VENTA_DIRECTA_LISTA': 
        return {            
         ...state,
          items: action.items,
          sumaTotal: action.suma,
          cantidadTotal: action.cantidad      
        };  
      case 'VENTAS_PAGAR':  
        return {            
         ...state,
          items: [],
          sumaTotal: 0,
          cantidadTotal: 0,
          modalView: false,
          bandera: action.response
        };  
      case 'VENTA_DIRECTA_CANCELAR': 
        return {            
         ...state,
          items: [],
          sumaTotal: 0,
          cantidadTotal: 0
        };           
      default:
        return state;
    }
  }