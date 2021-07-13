import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit, faTrash
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import { useCallback } from 'react';

function SucursalesTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const sucursales= useSelector(state => state.sucursales)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload, page, num) =>{
    dispatch(crudActions.getListasGet(xredux, payload, page, num,'nombre','ASC'))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('SUCURSALES_DATA','sucursales',1,12);
    }
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  const delHandler = (pky) => {               
    dispatch(crudActions.getDelList('SUCURSALES_DATA','sucursales',pky))            
  }
  const itemHandler = (pky) => {                   
    dispatch(crudActions.getItem('SUCURSALES_ITEM','sucursales',pky))
  }

  

  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="45%">Nombre</th>
                <th width="25%">Dirección</th>
                <th width="10%">Responsable</th>
                <th width="10%">Teléfono</th>
                <th width="10%">Estado</th>                
            </tr>
        </thead>
        {sucursales.data && (
            <tbody>
                {sucursales.data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombre}</td>
                      <td>{item.direccion}</td>
                      <td>{item.responsable}</td>
                      <td>{item.telefono}</td>                                            
                      <td>
                      <Button className="btn btn-success btn-xs" onClick={() => {itemHandler(item.id)}} >
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button className="btn btn-danger btn-xs" onClick={() => {delHandler(item.id)}} >
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      </td>
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>    
 </div> 
 <div className="navegador" >
    <Pagination
    makeHttpRequestWithPage={ makeHttpRequestWithPage }
    total={ sucursales.total}
    paginas={ sucursales.paginas}
    current= { sucursales.pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default SucursalesTable