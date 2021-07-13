import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions, membresiaActions } from '../../../actions'
import Moment from 'react-moment'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {    
 
  faTrash,
  faDollarSign,
  faFilePdf,
  faCheck,
  faTimes

} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'


function MembresiasTable () {              
  
  const dispatch = useDispatch()  

  const {data, pagina, paginas, total } = useSelector(state => state.membresias)
  const  item  = useSelector(state => state.clientes.item)
  
  const makeHttpRequestWithPage = (page, num) =>{        
    dispatch(membresiaActions.getDetalle('MEMBRESIAS_DATA','membresias',page, num, item.id))  
  }

  const delHandler = (pky) => {               
    dispatch(crudActions.deleteList('MEMBRESIAS_DATA','membresias',pky))            
  }

  useEffect(() =>{    
      
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
    };
  }, []);
   
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>                  
                <th width="35%">Paquete</th>
                <th width="15%">Total</th>
                <th width="10%">F.Registro</th>
                <th width="10%">F.Vencimiento</th>
                <th width="10%">Estado</th>
                <th width="10%">Ingresos</th>   
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                                        
                      <td>{item.Paquete.nombre}</td>     
                      <td>{item.ingresos} Bs.</td>                      
                      <td><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>
                      <td><Moment format="DD/MM/YYYY">{item.fvigencia}</Moment></td>
                      <td>{item.estado ? 
                        <FontAwesomeIcon icon={faCheck} className="text-success"/> : 
                        <FontAwesomeIcon icon={faTimes} className="text-danger"/>
                      }</td>
                      <td>{item.intros}</td>  
                      <td>
                      {item.estado === false ? 
                      <>                      
                      <Button className="btn btn-danger btn-xs" onClick={() => {delHandler(item.id)}} >
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      <Link to={`/admin/notas/${item.id}`}>
                           <Button className={"btn btn-warning btn-xs"}>
                              <FontAwesomeIcon icon={faDollarSign} />
                           </Button>
                        </Link>
                      </>  
                      :
                          <Button className={"btn btn-danger btn-xs"}>
                            <FontAwesomeIcon icon={faFilePdf} />
                          </Button> 
                      }
                        
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

export default MembresiasTable