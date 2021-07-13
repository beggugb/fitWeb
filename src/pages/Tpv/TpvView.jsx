import React, { useState,useEffect, useCallback } from 'react';
import { tpvActions } from '../../actions/tpv.actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col,
  Modal,
  Button,
  ModalBody

} from "reactstrap"

import CategoriaList from '../Categorias/components/CategoriaList'
import ArticulosList from '../Articulos/components/ArticulosList'
import TpvList from '../Tpv/components/TpvList'
import TpvCalc from '../Tpv/components/TpvCalc'
import TpvPagar from '../Tpv/components/TpvPagar'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function TpvView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)  
  const { modalView} = useSelector(state => state.ventas)  
  const getData = useCallback((pag,num,categoria) =>{           

    dispatch(tpvActions.getArticulos('ARTICULOS_DATA','tpv',pag,num,categoria)) 
    dispatch(tpvActions.getCategorias('CATEGORIAS_LISTA','categorias')) 
   
  },[dispatch])


  useEffect(() =>{    
    if(!mount) {
      setMount(true);      
      getData(1,20,0)
      
   }
    return () =>{             
        /*dispatch(tpvActions.getReset('TPV_RESET'))               */
    };
  }, [dispatch, getData, mount]);

   const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;        
    dispatch(tpvActions.viewModal(est)) 
  };
  
  return (
     <div className="content">     
    <div className="main-contenido"> 
    <Row>
      <Col className="tabs">
      
      </Col>
    </Row>
    
    <div className="tpv">        
      <div className="tpvlista">
        <div className="items">
        <TpvList/>
        </div>
        <div className="calculadora">
        <TpvCalc/>
        </div>
          
      </div>



      <div className="tpvitems">
        <div className="categorias">
          <CategoriaList/>
        </div>

        <div className="productos">
          <ArticulosList/>
        </div>
      </div>      
    </div>

    <Modal isOpen={modalView} toggle={toggleModalView}>
      <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <ModalBody>
        <TpvPagar/>      
      </ModalBody>
    </Modal>

    </div>
  </div> 
  );
}

export default TpvView