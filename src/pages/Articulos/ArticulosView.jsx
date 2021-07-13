import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../actions'
import {    
  Modal,
  ModalBody,
  Button
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import ArticulosTable from './components/ArticulosTable'
import ArticuloSearch from './components/ArticuloSearch'
import ArticuloForm from './components/ArticuloForm'




function ClientesView () {     
  const dispatch = useDispatch()
  const { modalView } = useSelector(state => state.articulos)

  const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;             
    dispatch({type:'ARTICULOS_VIEW',view:est})                
  };
 
  useEffect(() =>{            
    console.log('carga')         
    return () =>{             
        dispatch(crudActions.setReset('ARTICULOS_RESET'))               
    };
  }, []);
  
  return (
    <div className="content">       
      <div className="main-contenido"> 
        <h6 className="ml-2 mt-2">Articulos</h6>
        <ArticuloSearch/>
        <ArticulosTable/>
        
        <Modal isOpen={modalView} toggle={toggleModalView}>
          <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>
            <ArticuloForm/>  
          </ModalBody>
        </Modal>  
      </div>
    </div> 
  );
}

export default ClientesView