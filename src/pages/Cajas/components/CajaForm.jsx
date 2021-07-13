import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function CajaForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.cajas.item)     
  let us = JSON.parse(localStorage.getItem('user')) 
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('CAJAS_CHANGE',name,value))  
 }


const submitHandle = event => {       
    event.preventDefault()    
       
    
    let dat = {}
    dat.montoInicial = parseInt(item.montoInicial)
    dat.estado = false
    dat.montoEgreso = 0
    dat.montoFinal = parseInt(item.montoInicial)
    dat.montoIngreso = 0
    dat.usuarioId = us.id
    console.log(dat)

    dispatch(crudActions.createList('CAJAS_DATA','cajas',dat))  
    dispatch({ type: 'RESET_CAJA' });
    
      
 }


         
  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Cajas - Usuario: {us.nombre} </Col>
                </Row>                                
           </div>
           <div className="subcaja">
         <Row>
          <Col md={12} className="cajadetalle">
           <Form onSubmit={ submitHandle}>              
            <div className="sub-form">              
                <Row>
                  <Col md="3" className="subcajas">
                      <Label>Monto Ingreso :</Label>
                    </Col>   
                    <Col md="6" className="subcajas">
                      <FormGroup>                          
                       <Input
                            id="montoInicial"
                            type="number"
                            name="montoInicial"                                                        
                            value={item.montoInicial}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    <Col md="3" className="subcajas">
                     <Button 
                      type="submit"
                      className={"btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} { " Guardar"}
                      </Button>
                    </Col>
                                                                                         
                </Row>
          
            </div>           
            </Form>    
            </Col>            
          </Row> 

        </div>                           

     </div>                              
  );
}

export default CajaForm