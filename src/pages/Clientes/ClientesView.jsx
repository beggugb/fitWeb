import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import {    
  Modal,
  ModalBody,
  Button
} from "reactstrap"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import ClientesTable from './components/ClientesTable'
import ClientesSearch from './components/ClienteSearch'
import ClienteForm from './components/ClienteForm'

function ClientesView () {     
  const dispatch = useDispatch()    
  const { modalView } = useSelector(state => state.clientes)

  const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;             
    dispatch({type:'CLIENTES_VIEW',view:est})                
  };

  useEffect(() =>{          
      console.log('cargaClientes')         
    return () =>{             
        dispatch(crudActions.setReset('CLIENTES_RESET'))               
        console.log('descargas') 
    };
  }, []);
  console.log('ooo')
  return (
    <div className="content">     
      <div className="main-contenido">   
        
        <h6 className="ml-2 mt-2">Clientes</h6>
        <ClientesSearch/>
        <ClientesTable/>
        
        <Modal isOpen={modalView} toggle={toggleModalView}>
          <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>
            <ClienteForm/>  
          </ModalBody>
        </Modal>

      </div>
    </div> 
  );
}

export default ClientesView