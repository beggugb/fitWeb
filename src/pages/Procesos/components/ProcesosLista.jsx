import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faTimes,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { useCallback } from 'react';

function ProcesoLista () {        
    
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)
  const user = useSelector(state => state.users.user)

  const fetchProcesos = useCallback(() =>{
    dispatch(crudActions.getListaGet('PROCESOS_DATA','procesos',user.id))
  },[user, dispatch])
      
  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      fetchProcesos()
   }
    return () =>{             
        dispatch(crudActions.getReset('PROCESOS_RESET'))       
    };
  }, [fetchProcesos, dispatch, mount]);  
  const data = useSelector(state => state.procesos.data)        

       
  return (    
     <Table className="table-simple">
        <thead>
            <tr>  
                <th width="80%">Proceso</th>
                <th width="20%">Estado</th>                  
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.descripcion}</td>
                      <td className="text-center">{item.estado === 'pendiente' ?  <FontAwesomeIcon className="text-danger" icon={faTimes} />:  <FontAwesomeIcon className="text-success" icon={faCheck} />}</td>
                    </tr>  
                    ))}
            </tbody>
        )}
     </Table>
  );
}

export default ProcesoLista