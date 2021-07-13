import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions, articuloActions } from '../../../actions'
import {      
    Table,    
    Button,
    Modal,
    ModalBody
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit,
  faFilePdf,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import { useCallback } from 'react';
import ArticuloDetalle from './ArticuloDetalle'

function ArticulosTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const {data,total,pagina,paginas,modalView}= useSelector(state => state.articulos)
  let us = JSON.parse(localStorage.getItem('user'))

  
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('ARTICULOS_DATA','articulos',page, num,'nombre','ASC'))  
  },[dispatch])

  useEffect(() =>{    

      makeHttpRequestWithPage(1,12);
  
     return () =>{            
        /*dispatch(crudActions.getReset('ARTICULOS_RESET'))*/
    };
  }, []);

  const editCliente = (pky) => {        
    let est = modalView === true ? false : true;             
    dispatch({type:'ARTICULOS_VIEW',view:est})     
    dispatch(articuloActions.getItem('ARTICULOS_ITEM','articulos',pky))
  };
    
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>                  
                <th width="15%">Código</th>
                <th width="40%">Nombre</th>                
                <th width="15%">Categoria</th>                
                <th width="10%">$Venta</th>
                <th width="10%">Stock</th>   
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                                                                  
                      <td>{item.code}</td>
                      <td>{item.nombre}</td>
                      <td>{item.Categorium.nombre}</td>                      
                      <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.pventa)}</td>
                      <td>{item.stock}</td>                      
                      <td className="text-center">
                        <Button className="btn btn-success btn-xs" onClick={() => { editCliente(item.id)}} >
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
    total={total}
    paginas={paginas}
    current= {pagina} 
    pagina= {12}
    />
 </div>

 
 </>
  );
}

export default ArticulosTable