import { crudService } from "../services";
export const articuloActions = {    
  getItem,    
  
};

/*---------------------------------------------------------------*/
function getItem(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {         
          dispatch(gitem(xredux, response.result));                  
          dispatch({type: "CATEGORIAS_ITEM",response:response.result.Categorium});
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
