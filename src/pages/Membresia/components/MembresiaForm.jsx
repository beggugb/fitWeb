import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Label
} from "reactstrap"
import { stylesErp } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import DatePicker from 'react-date-picker';

import PaqueteSelect from '../../Paquetes/components/PaqueteSelect'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [                                
                {"value":"normal","label":"normal"},
                {"value":"canje","label":"canje"},                
                {"value":"prueba","label":"prueba"},                
                ];
               

function add_months(dt, n) 
 {

   return new Date(dt.setMonth(dt.getMonth() + n));      
 }


 function getFecha(today) 
 {
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var tt = yyyy + '-' + mm + '-' + dd;    
    return tt
 }                



function MembresiaForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.membresias.item) 
  const paquete = useSelector(state => state.paquetes.item)  
  const cliente = useSelector(state => state.clientes.item)  
  let us = JSON.parse(localStorage.getItem('user'))

   const [value, onChange] = useState(new Date());
   var d = new Date();
   const [values, onChanges] = useState(add_months(d,1));
       
 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('MEMBRESIAS_CHANGE',prop,value))  
    
 }


const submitHandle = event => {       
    event.preventDefault()    
    
    console.log(paquete.diario)
    console.log(paquete.id)
    let dat = item
    dat.orden = '1'
    dat.num = 1
    dat.ingresos = parseInt(paquete.valor)
    dat.intros = 30
    dat.ivigencia = getFecha(value)
    dat.fvigencia = paquete.diario ? getFecha(value) : getFecha(values)
    dat.paqueteId = paquete.id
    dat.clienteId = cliente.id     
    dat.usuarioId = us.id

    dispatch(crudActions.createList('MEMBRESIAS_DATA','membresias',item))  
    dispatch({ type: 'RESET_MEMBRESIA' });
     
 }


         
  return (    
    <div className="herramientas">                       
      <Form onSubmit={ submitHandle}>
      <div className="sub-form">   
            <Row form>                
              <Col md={6}>
                <FormGroup>
                  <Label for="ePaquete">Paquete</Label>
                  <PaqueteSelect/>
                </FormGroup>   
              </Col>
               <Col md={3}>
                <FormGroup>
                  <Label for="ePaquete">F.Inicio :</Label>
                  <DatePicker onChange={onChange} value={value} className="calendario"/>
                </FormGroup>   
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="eTelefono">F.Vigencia</Label>
                  <DatePicker onChange={onChanges} value={values} className="calendario"/>                  
                </FormGroup>    
              </Col>
            </Row>

            <Row form>               
             
              <Col md={6}>
                <FormGroup>
                  <Label for="eTipo">Tipo</Label>
                  <Select                                                               
                          defaultValue={tipos[0]}
                          name="tipo"    
                          id="tipo"                    
                          options={tipos}      
                          isClearable={true}                          
                          value={defaultVal(tipos,item.tipo)}                                                                                                                                
                          onChange={ changesHandler('tipo')} 
                          />   
                </FormGroup>    
              </Col>
               <Col md={6}>
                <Button 
                  type="submit"
                  className={"btn-md btn-info mt-4"}>
                  <FontAwesomeIcon icon={faSave} />  
                  {' '}  Registrar
                </Button>  
              </Col>


            </Row>

       </div>
      </Form>       
    </div>

  );
}

export default MembresiaForm