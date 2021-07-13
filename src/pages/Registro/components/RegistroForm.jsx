import React, { useState} from 'react';
import { useDispatch} from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col, Form, FormGroup, Input, Label
} from "reactstrap"


function RegiStroForm () {     
  const dispatch = useDispatch()  
     
 
  const [clienteId,setClienteId] = useState('')

  


  
       
  
  const changeHandler = event => {    
  const {  value } = event.target  
   setClienteId(value)  
  }



const submitHandle = event => {       
    event.preventDefault()        
    
    let dato = {}
    dato.clienteId = clienteId
    dispatch(crudActions.createList('REGISTROS_ITEM','registros',dato))  
    setClienteId('')  
    /*playSound()*/
 }



  return (    
                             
         <Row>
          <Col md={12} >
           <Form onSubmit={ submitHandle}>              
            <div className="sub-form">              
                <Row>
                  <Col md="2" className="subcajas">
                      <Label className="text-white ml-2 text-lg">CI :</Label>
                    </Col>   
                    <Col md="10" className="subcajas">
                      <FormGroup>                          
                       <Input
                            id="clienteId"
                            type="text"
                            name="clienteId"                                                        
                            value={clienteId}
                            onChange={changeHandler}  
                            className="inputr"                                                 
                          />
                      </FormGroup>
                    </Col>
                </Row>
            </div>           
            </Form>    
            </Col>            
          </Row> 
     
  );
}

export default RegiStroForm