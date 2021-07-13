import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import { cajaActions } from '../../../actions/caja.actions'
import Moment from 'react-moment'

import {      
    Table,    
    Button,
      Modal,
    ModalBody
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {    
  faEdit,
  faLock,
  faLockOpen,
  faFilePdf,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import CajasItemsDetalle from './CajasItemsDetalle'



function CajasTable () {              
  
  const dispatch = useDispatch()    
  const {data, pagina, paginas, total, modalView, item } = useSelector(state => state.cajas)
  const citems = useSelector(state => state.cajasitems.data)

  let us = JSON.parse(localStorage.getItem('user'))
  
  const makeHttpRequestWithPage = (page, num) =>{        
      /*dispatch(crudActions.getData('CAJAS_DATA','cajas',page, num, us.id))  */
    dispatch(cajaActions.getListDetalle('CAJAS_DATA','cajas',page,num, us.id)) 

  }

  const closeHandler = (pky) => {     
     let dato = pky
     dato.usuarioId = us.id       
     dato.estado = true
     dispatch(crudActions.putList('CAJAS_DATA','cajas',dato))            
  }


   
   const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;    
    
    if(item){
      dispatch(cajaActions.getItems('CAJAS_ITEMS_DATA','cajas',item.id))
    }
    
    dispatch(cajaActions.viewModal('CAJAS_VIEW',est))        
        
  };
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="10%">Fecha</th>
                <th width="20%">Usuario</th>
                <th width="10%">$ Inicial</th>
                <th width="10%">$ Ingreso</th>
                <th width="10%">$ Egreso</th>
                <th width="10%">$ Final</th>
                <th width="10%">Estado</th>   
                <th width="10%">F.Cierre</th>  
                
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>     
                      <td>{item.Usuario.nombre}</td>     
    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoInicial)}</td>
    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoIngreso)}</td>
    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoEgreso)}</td>
    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoFinal)}</td>
                      
                      <td>{item.estado ? 
                        <Button className={"btn btn-danger btn-xs"}>
                          <FontAwesomeIcon icon={faLock} />
                        </Button>  
                        : 
                        <Button className={"btn btn-success btn-xs"}>
                          <FontAwesomeIcon icon={faLockOpen} />
                        </Button>  
                      }</td>
                      <td>
                      {item.fechaCierre ? 
                        <Moment format="DD/MM/YYYY">{item.fechaCierre}</Moment>
                        :
                        <span>abierto</span>
                      }                      
                      </td>  
                      <td>                      
                       {item.estado ? 
                          <Button className={"btn btn-danger btn-xs"} onClick={() => {toggleModalView(item)}}>
                              <FontAwesomeIcon icon={faFilePdf} />
                          </Button>
                        :
                        <>
                        <Link to={`/admin/cajasitems/${item.id}`}>
                           <Button className={"btn btn-info btn-xs"}>
                              <FontAwesomeIcon icon={faEdit} />
                           </Button>
                        </Link>
                        <Button 
                            className={"btn btn-warning btn-xs"}
                            onClick={() => {closeHandler(item)}}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                        </Button>
                        </>
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
  
  <Modal isOpen={modalView} toggle={toggleModalView}>
      <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    <ModalBody>
        <CajasItemsDetalle
          user={us}          
          caja={item}
          data={citems}
        />    
    </ModalBody>
  </Modal>

 
 </>
  );
}

export default CajasTable