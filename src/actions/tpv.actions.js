import { tpvService } from "../services";

import {toastr} from 'react-redux-toastr'

export const tpvActions = {    
  getArticulos,
  getCategorias,
  addItems,
  resetTpv,
  viewModal,
  mensaje,
  pagar
};

/*|===================================ALL==========================================|*/
function pagar(dato) {
  return (dispatch) => {    
    tpvService
      .pagar(dato)
      .then((response) => {                 
        dispatch(pp(true));        
        toastr.success('Venta', "Realizada con exito") 
      })
      .catch((err) => {
        /*dispatch(createNotification(alertActions.error(err)));*/
        dispatch(pp(false));        
        toastr.error('Error', "No tiene Caja Abierta") 
      });
  };
}

export function pp(dato) {  
  return {
    type: 'VENTAS_PAGAR',
    response: dato
  };
}


export function mensaje(dato) {
  return (dispatch) => {    
    /*dispatch(createNotification(alertActions.error(dato)));*/
  };
}

export function resetTpv(){  
    return{
        type: "VENTAS_RESET"
    }
}

export function addItems(data,suma,cantidad){  
    return{
        type: "VENTA_DIRECTA_LISTA",
        items: data,
        suma: suma,
        cantidad: cantidad
    }
}


export function viewModal(est){  
  
    return{
        type: "VENTAS_VIEW",
        view: est
    }
}



/*|===================================ALL==========================================|*/
function getArticulos(xredux, payload, pag, num, cat) {
  return (dispatch) => {    
    tpvService
      .getArticulos(pag, num, cat)
      .then((response) => {         
        
        dispatch(articulos(xredux, response.result));        
      })
      .catch((err) => {
        /*dispatch(createNotification(alertActions.error(err)));*/
      });
  };
}

export function articulos(redu, response) {  
  return {
    type: redu,
    response: response
  };
}

/*|===================================ALL==========================================|*/
function getCategorias(xredux) {
  return (dispatch) => {    
    tpvService
      .getCategorias()
      .then((response) => {         
        
        dispatch(categorias(xredux, response.result));        
      })
      .catch((err) => {
        /*dispatch(createNotification(alertActions.error(err)));*/
      });
  };
}

export function categorias(redu, response) {  
  return {
    type: redu,
    response: response
  };
}


