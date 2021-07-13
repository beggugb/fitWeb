import React, { useEffect, useState } from 'react';
import { crudActions, informeActions } from '../../actions'
import { useDispatch } from 'react-redux'

import DatePicker from 'react-date-picker';
import Consolidado  from './Consolidado';
import { Link } from "react-router-dom";

import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Form,
  Button
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSave, faTags } from "@fortawesome/free-solid-svg-icons";




function ConsolidadoView () {     
  const dispatch = useDispatch()
    const [activeTab] = useState('1');    
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());      
    let us = JSON.parse(localStorage.getItem('user'))    

  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('INFORMES_RESET'))               
    };
  }, [dispatch]);



 const submitHandle = event => {       
   event.preventDefault()       
   const item = {}
   item.desde = value1
   item.hasta = value2    
   item.usuarioId = us.id     
   dispatch(informeActions.informes('INFORMES_CONSOLIDADO','consolidado',item,value1,value2))          
   
 }
  
  return (
     <div className="content">     
    <div className="main-contenido"> 
    <Row>
      <Col className="tabs">
      <Nav tabs>                
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}>
          <FontAwesomeIcon icon={faList} />   
          {' '} Informes
          </NavLink>
      

        </NavItem>        
      </Nav>
      </Col>
    </Row>

   <Row>
      <Col md={3}>
        <Link to={`/admin/informes/`}>
          <Button className={"btn btn-info btn-xs"}>
            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe de Clientes
          </Button>
        </Link>
      </Col>
      <Col md={3}>
       <Link to={`/admin/imembresias/`}>
          <Button className={"btn btn-info btn-xs"}>
            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe de Membresias
          </Button>
        </Link>
      </Col>
      <Col md={3}>
       <Link to={`/admin/icajas/`}>
          <Button className={"btn btn-info btn-xs"}>

            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe de Cajas
          </Button>
        </Link>
      </Col>
      <Col md={3}>
       <Link to={`/admin/consolidado/`}>
          <Button className={"btn btn-success btn-xs"}>

            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe Consolidado
          </Button>
        </Link>
      </Col>
    </Row>
                        





    <div className="informes">    
           <Form onSubmit={ submitHandle}>  
            <h6>Parametros </h6>
            <div className="sub-form">              
                <Row>                                        
                     <Col md="2" className="subcajas">
                      <Label>Desde :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChange1}
                        value={value1}
                      />
                    </FormGroup>
                    </Col>
                      <Col md="2" className="subcajas">
                      <Label>Hasta :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChange2}
                        value={value2}
                      />
                    </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                      <Button 
                      type="submit"
                      className="btn-md btn-info">
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} Generar
                      </Button>
                      </FormGroup>  
                    </Col>                    
                </Row>
                               
            </div>                 
            
            </Form>  

    <Row>
      <Col>
        <Consolidado/>
      </Col>
    </Row>
        
    </div>
    </div>
  </div> 
  );
}

export default ConsolidadoView