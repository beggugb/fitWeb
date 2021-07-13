import React, { useState, useRef  } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tpvActions } from '../../../actions/tpv.actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recibotpv from './Recibotpv'
import { useReactToPrint } from 'react-to-print';
import {      
  faSave
} from "@fortawesome/free-solid-svg-icons";
import {      
  Button,
  Row,
  Col,
  Input,
  Form,
  Label,
  FormGroup
} from "reactstrap"


function TpvPagar ({getComponent}) {          
  const dispatch = useDispatch()   
  const {items, sumaTotal, cantidadTotal, bandera } = useSelector(state => state.ventas)  
  const user = JSON.parse(localStorage.getItem('user'))  
  const [pago,setPago] = useState(0)
  const [cambio,setCambio] = useState(0)

  const changeHandler = event => {    
   const { value } = event.target  
   setPago(value)
   if(value > 0)
   {
    let dato = parseInt(value)  - parseInt(sumaTotal)  
    setCambio(dato) 
   }else{
    setCambio(0)
   }   
 }

const submitHandle = event => {       
    event.preventDefault()    
    let dat = new Date()    
    let dato = {}    
    dato.estado = true
    dato.montoTotal = sumaTotal 
    dato.fecha = dat
    dato.usuarioId = user.id  

    let dating = {}
    dating.item = dato
    dating.items = items
    dispatch(tpvActions.pagar(dating))     
    handlePrint()
    
 }

  const componentRef = useRef();  
  const handlePrint = useReactToPrint({    
    content: () => componentRef.current,    
  });
 
return (      
 <div className="tpvForm">  
    <Row>
    <Col md="6">
      <Recibotpv
        ref={componentRef} 
        user= {user}        
        items={items}
        cantidadTotal={cantidadTotal}
        sumaTotal={sumaTotal}
      /> 
    </Col>
   
   <Col md="6">
   <div className="tpvPago">   
       <Form onSubmit={ submitHandle}>              
            <div className="sub-form">                        
                <Row>
                    <Col md="4" className="subcajas">
                      <Label>Total:</Label>
                    </Col>
                    <Col md="8" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="sumaTotal"
                            id="sumaTotal"                            
                            value={sumaTotal || ''}
                            onChange={ changeHandler }                                    
                            disbled="true"
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="4" className="subcajas">
                      <Label>Monto :</Label>
                    </Col>
                    <Col md="8" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="pago"
                            id="pago"                            
                            value={pago || ''}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>                    
                    <Col md="4" className="subcajas">
                      <Label>Cambio :</Label>
                    </Col>   
                    <Col md="8" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="cambio"
                            type="text"
                            name="cambio"                                                        
                            value={cambio || ''}
                            onChange={changeHandler}        
                            disbled="true"                                     
                          />
                      </FormGroup>
                    </Col>                                                         
                </Row>
             

                <Row>
                    <Col md="12">
                    <Button 
                      type="submit"
                      className="btn-md btn-info mt-5">
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} Pagar
                      </Button>
                    </Col>   

                </Row>
            </div>           
</Form> 
</div>                                                                                                
   </Col>   
   
   </Row> 

   </div> 

   );
}

export default TpvPagar