const initialState = {
    data: []
  };
  
  export function procesos(state = initialState, action) {
    switch (action.type) {
      case "PROCESOS_DATA":
        return {
          ...state,
          data: action.response.data
        };          
      case "PROCESOS_RESET":
        return {
          ...state,
          data: []
        };
      default:
        return state;
    }
  }
  