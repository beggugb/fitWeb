const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    item:{
      nombre: '',
      code: '',
      variantes: '',      
      pventa: '',      
      filename: '',
      stock: 0,      
      categoriaId: 1,
      Categorium:{
          id:'',
          nombre:''
        }
    }    
  };
  
export function articulos(state = initialState, action) {
    switch (action.type) {
       case "ARTICULOS_VIEW":
        return {
          ...state,
          modalView: action.view
        }; 
      case "ARTICULOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "ARTICULOS_ADD":
        return {
          ...state,
          item: action.response.articulo
        };
      case "ARTICULOS_ITEM":
          return {
            ...state,
            item: action.response
          };
      case "ARTICULOS_ITEM_VIEWS":
          return {
            ...state,
            item: initialState.item,
            modalView: false
          };
      case "ARTICULOS_ITEM_VIEW":
          return {
            ...state,
            item: action.response,
            modalView: true
          };          
      case "ARTICULOS_LISTA":
            return {
              ...state,
              data: action.response
            }; 
            

      case "ARTICULOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "ARTICULOS_RESET_ITEM":
        return {
          ...state,
          item: initialState.item
        };
      case "ARTICULOS_RESET":
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
  