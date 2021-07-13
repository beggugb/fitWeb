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

function PaquetesTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const { data, total, pagina, paginas } = useSelector(state => state.paquetes)
 
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('PAQUETES_DATA','paquetes', page, num,'nombre','ASC'))  
  },[dispatch])

  useEffect(() =>{        
    makeHttpRequestWithPage(1,12);    
     return () =>{                    
        dispatch(crudActions.setReset('PAQUETES_RESET'))
    };
  }, []);

  const delHandler = (pky) => {               
    dispatch(crudActions.deleteList('PAQUETES_DATA','paquetes',pky))            
  }
  const itemHandler = (pky) => {                   
    dispatch(crudActions.getItem('PAQUETES_ITEM','paquetes',pky))
  }


  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="50%">Nombre</th>
                <th width="30%">Valor</th>
                <th width="10%">Tipo</th>
                <th width="10%"></th>                             
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombre}</td>
                      <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.valor)}</td>                      
                      <td>{item.diario ? 'diario': 'normal'}</td>
                      <td className="text-center">
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
    total={ total}
    paginas={ paginas}
    current= { pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default PaquetesTable