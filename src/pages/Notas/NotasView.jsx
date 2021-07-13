import React, { useState,useEffect } from 'react';

import {  useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,

  NavLink
} from "reactstrap"
import classnames from 'classnames';


import MembresiaDetalles from '../Membresia/components/MembresiaDetalles'
import NotaDetalle from './components/NotaDetalle'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTags } from "@fortawesome/free-solid-svg-icons";
import { crudActions } from '../../actions/crud.actions'

function NotasView({...props}) {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab] = useState('2');  


  
  useEffect(() =>{        
      const {  match: { params }} = props;            
      dispatch(crudActions.getItem('NOTAS_ITEM','membresias',params.notaId))             
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
    };
  }, []);

  return (
        <div className="content">     
          <div className="main-contenido">   
            <h6 className="ml-2 mt-2">Nota Membresia</h6>
            <Row>
              <Col md={12}>
                <NotaDetalle/>
              </Col>                         
            </Row>
          </div>
        </div> 
  );
}

export default NotasView