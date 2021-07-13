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
import { Link } from "react-router-dom";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTags } from "@fortawesome/free-solid-svg-icons";
import { cajaActions } from '../../actions/caja.actions'
import CajasItemsTable from './components/CajasItemsTable'
import CajaDetalle from '../Cajas/components/CajaDetalle'
import CajasItemsForm from './components/CajasItemsForm'

function CajasItemsView({...props}) {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab] = useState('2');  
  

  
  useEffect(() =>{    
    if(!mount) {
      setMount(true);
        const {  match: { params }} = props;            
        dispatch(cajaActions.getItemo('CAJAS_ITEMS_DATA','cajas',params.cajaId))      
    }
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
    };
  }, [dispatch, mount, props]);

  return (
        <div className="content">     
          <div className="main-contenido">   
            <Row>
              <Col className="tabs">
              <Nav tabs>                
                <NavItem>
                  <div className="cajai">
                  <Link to={`/admin/cajas`} 
                      className={classnames({ active: activeTab === '1' })}>                    
                      <FontAwesomeIcon icon={faList} />
                    {' '} Cajas
                    
                  </Link>  
                  </div>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}                    
                    >
                  <FontAwesomeIcon icon={faTags} />   
                  {' '} Movimientos
                  </NavLink>                          
                </NavItem>        
              </Nav>
              </Col>
            </Row>   
            
            <Row>
              <Col md={6}>
                <CajasItemsForm/>
              </Col>                          
              <Col md={6}>
              <CajaDetalle/>
              </Col>              
            </Row>

            <Row>
              <Col md={12}>
                <CajasItemsTable/>
              </Col>                         
            </Row>

          

          </div>
        </div> 
  );
}

export default CajasItemsView