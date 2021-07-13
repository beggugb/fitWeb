import React, { useEffect, useState } from 'react';
import { crudActions, informeActions } from '../../actions'
import { useDispatch } from 'react-redux'

import DatePicker from 'react-date-picker';
import Registros  from './Registros';
import { Link } from "react-router-dom";

import {  
  Row,
  Col,    
  FormGroup,
  Label,
  Form,  
  Button
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSave, faTags, faFunnelDollar, faCalculator, faChartBar } from "@fortawesome/free-solid-svg-icons";




function RegistroView () {     
  const dispatch = useDispatch()    
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());    




  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('INFORMES_RESET'))       
        console.log('descarga')
    };
  }, []);

  const submitHandle = event => {       
   event.preventDefault()       
   const item = {}
   item.desde = value1
   item.hasta = value2         
   dispatch(informeActions.informes('INFORMES_REGISTROS','registro',item,value1,value2))          
   
 }
  
  return (
    <div className="content">     
    <div className="main-contenido"> 
      <h6 className="ml-2 mt-2">Informes</h6>       
        <Row className="tabs">      
          <Col md={2} className="link-informe">
           <Link to={`/admin/iclientes/`}>            
                <FontAwesomeIcon icon={faUsers} />
                { ' ' }
                Clientes
              
            </Link>
          </Col>
          <Col md={2} className="link-informe">
           <Link to={`/admin/imembresias/`}>
                <FontAwesomeIcon icon={faTags} />
                { ' ' }
                Membresias
            </Link>
          </Col>
          <Col md={2} className="link-informe">
           <Link to={`/admin/icajas/`}>            
                <FontAwesomeIcon icon={faFunnelDollar} />
                { ' ' }
                Cajas
            </Link>
          </Col>
          <Col md={2} className="link-informe">
           <Link to={`/admin/consolidado/`}>            
                <FontAwesomeIcon icon={faChartBar} />
                { ' ' }
                Consolidado
            </Link>
          </Col>
          <Col md={2} className="link-active">
           <Link to={`/admin/iregistro/`}>            
                <FontAwesomeIcon icon={faCalculator} />
                { ' ' }
                Registro
            </Link>
          </Col>
        </Row>

      <div className="sub-form mt-3">              
      <Form onSubmit={ submitHandle}>         
              <Row form>                
                <Col md={5}>
                  <FormGroup>
                    <Label for="eFnacimiento">Desde : </Label>
                    <DatePicker onChange={onChange1} value={value1}/>
                  </FormGroup>   
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <Label for="eNit">Hasta :</Label>
                    <DatePicker onChange={onChange2} value={value2}/>
                  </FormGroup>    
                </Col>
                <Col md={2}>
                  <Button 
                      type="submit"
                      className="btn-md btn-info">
                      <FontAwesomeIcon icon={faSave} />  
                      {' '} Generar
                  </Button>     
                </Col>
              </Row>
             
        </Form>   
        </div>   

      <Row>
        <Col>
          <Registros/>
        </Col>
      </Row>    
           
    </div>
  </div> 
  );
}

export default RegistroView