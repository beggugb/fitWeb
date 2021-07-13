import { crudService, membresiaService } from "../services";
import {toastr} from 'react-redux-toastr'

export const membresiaActions = {  
  getDetalle,
  setPagar
};

function setPagar(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .putList(payload, dato)
      .then((response) => {                                                 
        dispatch(dpostList(xredux, response.result));        
       toastr.success('Correcto', response.message)
      })
      .catch((err) => {        
          toastr.error('Caja', "No tiene caja abierta")          
      });
  };
}

export function dpostList(xredux, result) {     
  return {  
    type: xredux,
    response: result
  };
}
/*-------------------------------------------------------------------------*/
function getDetalle(xredux, payload, page,num,dato) {  
  return (dispatch) => {
    membresiaService
      .getDetalle(payload, page,num,dato)
      .then((response) => {                                   
        dispatch(ListaGet(xredux, response.result));
      })
      .catch((err) => {
        toastr.error('Error', err)      
        
      });
  };
}

export function ListaGet(xredux, result) {  
 
  return {
    type: xredux,
    response: result
  };
}

/*-------------------------------------------------------------------------*/