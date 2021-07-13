import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,
  Col,
  Button, Form, FormGroup, Input, Label
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";



function ClienteSearch () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "nombres":"",
    "ci":"",
    "nit":"",
    
  });

  const newCliente = (item) => {        
    dispatch({type:'CLIENTES_VIEW',view:true})                
  };

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 }



 const submitHandle = event => {       
    event.preventDefault()    
    dispatch(crudActions.searchList('CLIENTES_DATA','clientes',item))  

 }
          
  return (    
      <div className="herramientas">                             
          
            <Row>
              <Col md="3" className="barra">
                <Button className="btn btn-success btn-md" onClick={() => { newCliente()}}>
                <FontAwesomeIcon icon={faPlus} />
                {' '}Nuevo Cliente
                </Button>
              </Col>
              <Col md="4" className="barra">

              </Col>
              <Col md="5" className="barra">
                <Form onSubmit={ submitHandle}>     
                  <Row form>
                    <Col md={10}>
                      <FormGroup>                    
                        <Input type="text" name="nombres" placeholder="...introduzca busqueda" id="nombres"  value={item.nombres || ''}  onChange={changeHandler} />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <Button className="btn-rd btn-info ">
                       <FontAwesomeIcon icon={faSearch} />                          
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>                
                                     
      </div>               
  );
}

export default ClienteSearch