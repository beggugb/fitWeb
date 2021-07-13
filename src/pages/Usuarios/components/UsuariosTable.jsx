import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import { useCallback } from 'react';

function UsuariosTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const usuarios = useSelector(state => state.usuarios)
 
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('USUARIOS_DATA','usuarios',page, num,'nombre','ASC'))  
  },[dispatch])

  useEffect(() =>{        
      makeHttpRequestWithPage(1,12);    
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
    };
  }, []);


  const itemHandler = (item) => {                   
    dispatch(crudActions.getItem('USUARIOS_ITEM','usuarios',item.id))
    dispatch(crudActions.changeValue('ROLES_CHANGE','id',item.rolId))        
  }
 

  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="45%">Nombre</th>
                <th width="25%">Username</th>                
                <th width="20%">Rol</th>
                <th width="10%">Actión</th>                
            </tr>
        </thead>
        {usuarios.data && (
            <tbody>
                {usuarios.data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombre}</td>
                      <td>{item.username}</td>                                            
                      <td>{item.Rol.nombre}</td>                                            
                      <td>
                      <Button className="btn btn-success btn-xs" onClick={() => {itemHandler(item)}} >
                      <FontAwesomeIcon icon={faEdit} />
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
    total={ usuarios.total}
    paginas={ usuarios.paginas}
    current= { usuarios.pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default UsuariosTable