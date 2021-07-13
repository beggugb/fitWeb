import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {    
  faEdit,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'


function ClientesTable ({getComponent}) {          
  const dispatch = useDispatch()    
  const {data, total ,pagina, paginas, modalView }= useSelector(state => state.clientes)


  const editCliente = (pky) => {        
    let est = modalView === true ? false : true;             
    dispatch({type:'CLIENTES_VIEW',view:est}) 
    dispatch(crudActions.getItem('CLIENTES_ITEM','clientes',pky))
  };

  const makeHttpRequestWithPage = (page, num) =>{
    dispatch(crudActions.getData('CLIENTES_DATA','clientes',page, num, 'nombres','ASC'))  
  }

  useEffect(() =>{        
      makeHttpRequestWithPage(1,12);    
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
        console.log('descarga table clientes')
    };  
  }, []);

  
  return (    
    <>    
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th 
                width="35%"                
                > Nombre                 </th>
                <th width="25%">Dirección</th>
                <th width="10%">Nit</th>
                <th width="10%">Ci</th>
                <th width="10%">Estado</th>   
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombres}</td>
                      <td>{item.direccion}</td>
                      <td>{item.nit}</td>
                      <td>{item.ci}</td>
                      <td>{item.estado ? "activo": "desactivado"}</td>
                      <td>
                        <Button className="btn btn-success btn-xs" onClick={() => { editCliente(item.id)}} >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Link to={`/admin/membresia/${item.id}`}>
                           <Button className={"btn btn-warning btn-xs"}>
                              <FontAwesomeIcon icon={faTags} />
                           </Button>
                        </Link>
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
    total={total}
    paginas={paginas}
    current= {pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default ClientesTable