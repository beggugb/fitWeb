import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";

function PaqueteForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.paquetes.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch(crudActions.changeValue('PAQUETES_CHANGE',name,value))  
 }

  const changeHa = (checked) => {          
   dispatch(crudActions.changeValue('PAQUETES_CHANGE','diario',checked))  
 }

const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      
      dispatch(crudActions.putList('PAQUETES_ADD','paquetes',item))            
    }else{
      dispatch(crudActions.createList('PAQUETES_ADD','paquetes',item))      
    }    
 }



         
  return (    
      <div className="herramientas">         
        <h6>Registro de paquetes</h6>                        
           <Form onSubmit={ submitHandle}>              
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="nombre"
                            type="text"
                            name="nombre"                                                        
                            value={item.nombre}
                            onChange={changeHandler}     
                            required                                              
                          />
                      </FormGroup>
                    </Col>
                    <Col md="1" className="subcajas">
                      <Label>Valor :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="number"
                            name="valor"
                            id="valor"                            
                            value={item.valor}
                            onChange={ changeHandler }  
                            required                                  
                          />
                      </FormGroup>
                    </Col>
                    <Col md="1" className="subcajas">
                      <Label>Diario :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                     <Switch                         
                        onChange={ changeHa }  
                        checked={item.diario} />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                      <Button 
                      type="submit"
                      className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} {item.id ? "Actualizar" : " Guardar"}
                      </Button>
                      </FormGroup>  
                    </Col>                    
                </Row>
                               
            </div>                 
            
            </Form>                              
        </div>               
  );
}

export default PaqueteForm