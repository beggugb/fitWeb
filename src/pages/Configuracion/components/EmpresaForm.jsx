import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";


function EmpresaForm () {     
  const dispatch = useDispatch() 
  const [mount,setMount] = useState(false)
  const item = useSelector(state => state.empresas.item)  
       
  const getData = useCallback(() =>{    
    dispatch(crudActions.getItem('EMPRESAS_ITEM','empresas',1))   
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getData()
   }
    return () =>{             
        dispatch(crudActions.setReset('EMPRESAS_RESET'))               
    };
  }, [getData, mount, dispatch]);

 
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('EMPRESAS_CHANGE',name,value))  
 }
 
 const submitHandle = event => {       
    event.preventDefault()        
      dispatch(crudActions.putUnit('empresas',item))                
 }

 
  return (    
      <div className="herramientas">         
        <h6>Empresa</h6>                        
           <Form onSubmit={ submitHandle}>  
            <h5>Datos iniciales </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="5" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="nombre"
                            type="text"
                            name="nombre"                                                        
                            value={item.nombre}
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
                            value={item.nit}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Dirección :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="direccion"
                            id="direccion"                            
                            value={item.direccion}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Teléfono :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="telefono"
                            type="text"
                            name="telefono"                                                        
                            value={item.telefono}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>                                                         
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Email :</Label>
                    </Col>
                    <Col md="4" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="email"
                            id="email"                            
                            value={item.email}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Web :</Label>
                    </Col>
                    <Col md="4" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="website"
                            id="website"                            
                            value={item.website}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                    
                </Row>
          
            </div>      
    
            
                <div className="sub-form mt-2">                              
                  <Row>
                    <Col md="10" className="subcajas">
                    </Col>  
                    <Col md="2" className="subcajas">
                      <Button 
                      type="submit"
                      className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} {item.id ? " Actualizar" : " Guardar"}
                      </Button>
                    </Col>                               
                  </Row>   
                </div>                   
            </Form>                              
        </div>               
  );
}

export default EmpresaForm