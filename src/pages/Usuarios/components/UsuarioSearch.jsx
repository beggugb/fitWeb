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

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [                
                {"value":"personal","label":"personal"},
                {"value":"empresarial","label":"empresarial"},                
                ];

function UsuarioSearch () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "name":"",
    "nit":"",
    "tipo":"",
    "page":1,
    "num":12,
    "prop":"name",
    "orden":"ASC"    
  });

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 }

 const changesHandler = event => {          
    const { value } = event ? event : '0' 
    setItem({
      ...item,
      tipo: value
    })  
  
 }

 const submitHandle = event => {       
    event.preventDefault()    
    dispatch(crudActions.searchPostList('CLIENTES_DATA','clientes',item))  

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
                    <Col md="5" className="subcajas">
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
                    <Col md="2" className="subcajas">
                      <Label>Nit :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="nit"
                            id="nit"
                            placeholder="--todos--"
                            value={item.nit}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="2" className="subcajas">                    
                       <label>Tipo</label>                          
                    </Col>                    
                    <Col md="4" className="subcajas">
                    <FormGroup>                       
                          <Select                                                               
                          defaultValue={tipos[0]}
                          name="tipo"    
                          id="tipo"                    
                          options={tipos}      
                          isClearable={true}                          
                          value={defaultVal(tipos,item.tipo)}                                                                                                                                
                          onChange={ changesHandler} 
                          styles={stylesErp} 
                          />
                       </FormGroup>
                    </Col>                    
                    <Col md="3" className="subcajas">                    
                       
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

export default UsuarioSearch