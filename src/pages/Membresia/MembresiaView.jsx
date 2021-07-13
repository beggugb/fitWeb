import React, {  useState,useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,  
  NavLink
} from "reactstrap"
import classnames from 'classnames';
import MembresiaDetalle from './components/MembresiaDetalle'
import MembresiasTable from './components/MembresiasTable'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTags } from "@fortawesome/free-solid-svg-icons";
import { crudActions, membresiaActions } from '../../actions'

function MembresiaView({...props}) {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)  
  const { item } = useSelector(state => state.clientes) 
  const [activeTab] = useState('2');  
  
  useEffect(() =>{        
        const {  match: { params }} = props;        
        dispatch(crudActions.getItem('CLIENTES_ITEM','clientes',params.clienteId))
        dispatch(membresiaActions.getDetalle('MEMBRESIAS_DATA','membresias',1,12, params.clienteId)) 
          
     return () =>{            
        dispatch(crudActions.setReset('MEMBRESIAS_RESET'))
    };
  }, []);


  return (
        <div className="content">     
          <div className="main-contenido"> 
            <Row>
              <Col md="7">
                <h6 className="ml-2 mt-2">Membresias </h6>
              </Col>
              <Col md="5">
                <h6 className="ml-2 mt-2 subtt">Nombre: {item.nombres} - CI: {item.ci}</h6>
              </Col>
            </Row>                          
            <MembresiaDetalle/>
            <MembresiasTable/>
          </div>
        </div> 
  );
}

export default MembresiaView