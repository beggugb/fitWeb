import React, { useCallback, useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ArticuloView from '../Articulos/ArticuloView'

function InventarioView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('datos')
  
  const getComponent = useCallback((name, tab) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'articulos':
      setComponent(<ArticuloView/>)
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('articulos','1')      
   }
    return () =>{             
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))       */
        console.log('descarga-inventario')
    };
  }, [mount, dispatch]);
  
  return (
    <div className="content">     
    <div className="main-contenido"> 
    <Row>
      <Col className="tabs">
      <Nav tabs>                
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}            
            onClick={() => { getComponent('articulos', '1',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Articulos
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('categorias', '2',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Categorias
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { getComponent('marcas', '3',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Marcas
          </NavLink>  
        </NavItem>    
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { getComponent('lineas', '4',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Lineas
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { getComponent('tipos', '5',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Tipos
          </NavLink>  
        </NavItem>        
      </Nav>
      </Col>
    </Row>        
    {component}
    </div>
  </div> 
  );
}

export default InventarioView