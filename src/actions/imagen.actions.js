import { imagenService } from "../services";
import {toastr} from 'react-redux-toastr'
export const imagenActions = {  
  uploadCliente,
  uploadCompania,
  uploadEmpresa,
  uploadArticulo
};

/*--------------------------------------------------------------------*/
function uploadArticulo(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadArticulo(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {        
       
      });
  };
}
/*--------------------------------------------------------------------*/
function uploadEmpresa(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadEmpresa(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {        
       
      });
  };
}
/*--------------------------------------------------------------------*/
function uploadCliente(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadCliente(payload, data, datoId)
      .then((response) => {       
        toastr.success(payload, 'Imagen Cargada')
      })
      .catch((err) => {        
       
      });
  };
}

/*--------------------------------------------------------------------*/
function uploadCompania(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadCompania(payload, data, datoId)
      .then((response) => {
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {
       
      });
  };
}
/*--------------------------------------------------------------------*/