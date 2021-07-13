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
import { faChevronDown, faUsers } from "@fortawesome/free-solid-svg-icons";

import EmpresaForm from '../Configuracion/components/EmpresaForm'
import SucursalesView from '../Sucursales/SucursalesView'
import UsuariosView from '../Usuarios/UsuariosView'
import PaquetesView from '../Paquetes/PaquetesView'

function ConfiguracionView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('datos')
  
  const getComponent = useCallback((name, tab) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'datos':
      setComponent(<><EmpresaForm/></>)      
      break;
      case 'sucursales':
      setComponent(<SucursalesView/>)
      break;
      case 'usuarios':
      setComponent(<UsuariosView/>)
      break;
      case 'paquetes':
      setComponent(<PaquetesView/>)
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('datos','1')      
   }
    return () =>{             
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))       */        
    };
  }, []);
  
  return (
    <div className="content">     
    <div className="main-contenido"> 
      <h6 className="ml-2 mt-2">Configuración</h6>
      <Nav tabs>                
        <NavItem>
          <NavLink
              className={classnames({ active: activeTab === '1' })}            
              onClick={() => { getComponent('datos', '1',1)}}>
              <FontAwesomeIcon icon={faChevronDown} />   
              {' '} Datos Iniciales
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { getComponent('paquetes', '4',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Paquetes
          </NavLink>  
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { getComponent('usuarios', '3',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Usuarios
          </NavLink>  
        </NavItem>      

      </Nav>
      {component}      
    </div>
  </div> 
  );
}

export default ConfiguracionView