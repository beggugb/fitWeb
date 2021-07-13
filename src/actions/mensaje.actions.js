
const mensajeActions = {    
  showSuccessSnackbar,
  clearSnackbar
};

export function showSuccessSnackbar(message,icono){
  return{
  type: "SNACKBAR_SUCCESS",
  message,
  icono
  }
};

export function clearSnackbar() {
  return{
  type: "SNACKBAR_CLEAR"
 }
};


export default mensajeActions