import { crudService } from "../services";
import {toastr} from 'react-redux-toastr'
export const crudActions = {  
  /*GET*/  
  getList,
  getLis,
  getItem,    
  getData,
  /*POST*/
  postList,
  createList,  
  createUnit,
  searchList,
  /*PUT*/
  putList,
  putUnit,
  /*DELETE*/
  deleteList,
  /*iCONS*/
  changeValue,
  setReset
};

/*---------------------------------------------------------------*/
function createUnit(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createUnit(payload, dato)
      .then((response) => {                        
        dispatch(resredux(xredux, response.result));  
         toastr.success(payload, 'Dato creado')       
      })
      .catch((err) => {       
        toastr.error(payload, err)       
      });
  };
}

export function resredux(xredux, result) {                                  
  return {  
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/









/*---------------------------------------------------------------*/
function getData(xredux, payload, page,num,prop,orden) {  
  return (dispatch) => {
    crudService
      .getData(payload, page,num,prop,orden)
      .then((response) => {                  
        dispatch(dgetList(xredux, response.result));
      })
      .catch((err) => {
        
        
      });
  };
}

/*---------------------------------------------------------------*/
function setReset(xredux) {  
  return {
    type: xredux
  };
}
/*---------------------------------------------------------------*/
function getList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .getList(payload, dato)
      .then((response) => {               
        dispatch(dgetList(xredux, response.result));
      })
      .catch((err) => {
        
      });
  };
}

function getLis(xredux, payload) {  
  return (dispatch) => {
    crudService
      .getLis(payload)
      .then((response) => {               
        dispatch(dgetList(xredux, response.result));
      })
      .catch((err) => {
        
      });
  };
}

export function dgetList(xredux, result) {   
  return {
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/
function getItem(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {                 
        if(xredux === 'NOTAS_ITEM')
        {
          dispatch(gitem('MEMBRESIAS_ITEM', response.result.mem.Membresia));
          dispatch(gitem('NOTAS_ITEM', response.result)); 
          dispatch(gitem('CLIENTES_ITEM', response.result.cli));                                   
        }else{
          dispatch(gitem(xredux, response.result));
        }
          /*dispatch(gitem(xredux, response.result));        */
      })
      .catch((err) => {
                
      });
  };
}

export function gitem(xredux, result) {  
  return {
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/
function postList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .postList(payload, dato)
      .then((response) => {                                        
        dispatch(dpostList(xredux, response.result));        
        toastr.success(payload, 'Dato creado')       

      })
      .catch((err) => {
        
        
      });
  };
}

export function dpostList(xredux, result) {     
  return {  
    type: xredux,
    response: result
  };
}
/*---------------------------------------------------------------*/
function createList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createList(payload, dato)
      .then((response) => {                          
        dispatch(dpostList(xredux, response.result));             
        if('REGISTROS_ITEM')
        {

        }else{
          toastr.success(payload, 'Dato creado')                  
        }
        
      })
      .catch((err) => {
        
        
      });
  };
}


function searchList(xredux, payload, dato) {    
  return (dispatch) => {
    crudService
      .searchList(payload, dato)
      .then((response) => {                            
        dispatch(dpostList(xredux, response.result));        
      })
      .catch((err) => {        
        
      });
  };
}
/*---------------------------------------------------------------*/
function putList(xredux, payload, dato) {    
  return (dispatch) => {
    crudService
      .putList(payload, dato)
      .then((response) => {                                                 
        dispatch(dpostList(xredux, response.result));    
        toastr.success(payload, 'Dato actualizado')                          
      })
      .catch((err) => {
        
      });
  };
}

/*---------------------------------------------------------------*/
function putUnit(payload, dato) {  
  return (dispatch) => {
    crudService
      .putUnit(payload, dato)
      .then((response) => {      
        toastr.success(payload, 'Dato actualizado') 
      })
      .catch((err) => {
        
      });
  };
}

/*---------------------------------------------------------------*/
function deleteList(xredux, payload, dato) { 
  return (dispatch) => {
    crudService
      .deleteList(payload, dato)
      .then((response) => {                                            
        dispatch(dpostList(xredux, response.result));    
        toastr.error(payload, 'Dato eliminado')       
     
      })
      .catch((err) => {        
        
      });
  };
}

/*---------------------------------------------------------------*/
function changeValue(xredux, props, values) {  
  return (dispatch) => {
    dispatch(change(xredux, props, values));
  };
}

export function change(xredux, props, values) {  
  return {  
    type: xredux,
    props: props,
    value: values
  };
}
/*---------------------------------------------------------------*/
