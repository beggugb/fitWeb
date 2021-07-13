import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem
} from "reactstrap"
import classnames from 'classnames';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { cajaActions } from '../../actions/caja.actions'
import { crudActions } from '../../actions/crud.actions'
import CajasTable from './components/CajasTable'
import CajaForm from './components/CajaForm'

function CajasView() {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab] = useState('2');  
  let us = JSON.parse(localStorage.getItem('user'))
  
  useEffect(() =>{    
    if(!mount) {
      setMount(true);                
        dispatch(cajaActions.getListDetalle('CAJAS_DATA','cajas',1,12, us.id))       
    }
     return () =>{            
        dispatch(crudActions.setReset('CAJAS_RESET'))
    };
  }, [dispatch, mount, us.id]);


  return (
        <div className="content">     
          <div className="main-contenido">   
           <h6 className="ml-2 mt-2">Cajas</h6>  
           <CajaForm/>
           <CajasTable/>
           </div>
        </div> 
  );
}

export default CajasView