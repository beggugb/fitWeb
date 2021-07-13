import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,
  Col,
  Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { stylesErp } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'


function SucursalSearch () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "nombre":"",    
    "page":1,
    "num":12,
    "prop":"nombre",
    "orden":"ASC"    
  });

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 } 

 const submitHandle = event => {       
    event.preventDefault()    
    dispatch(crudActions.searchPostList('SUCURSALES_DATA','sucursales',item))  

 }
          
  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Lista de Clientes</Col>
                </Row>                                
           </div>
           <div className="subcaja">
           <Form onSubmit={ submitHandle}>                   
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>
                    <Col md="7" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="name"
                            type="text"
                            name="name"                            
                            placeholder="--todos--"
                            value={item.name}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    <Col md="3" className="subcajas text-center">
                       <Button className="btn-md btn-info">
                       <FontAwesomeIcon icon={faSearch} />  
                        {' '} Buscar                          
                       </Button>
                    </Col>
                </Row>                
            </Form>                   
           </div>
        </div>               
  );
}

export default SucursalSearch