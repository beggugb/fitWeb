import React,{ useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label, FormText
} from "reactstrap"
import { stylesErp, paises  } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import DatePicker from 'react-date-picker';
import Select from 'react-select'
import { format } from "date-fns";
import ClienteImagen from './ClienteImagen'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [{"value":"personal","label":"personal"},
                {"value":"empresarial","label":"empresarial"},];
const sexos =  [{"value":"masculino","label":"masculino"},
                {"value":"femenino","label":"femenino"},];                

function ClienteForm () {     
  const dispatch = useDispatch()   
  const item = useSelector(state => state.clientes.item)    
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('CLIENTES_CHANGE',name,value))  
 }

 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('CLIENTES_CHANGE',prop,value))  

   
    
 }

  const dateHandler = prop => event => {                         
    let dd = format(event, "yyyy/MM/dd")
    dispatch(crudActions.changeValue('CLIENTES_CHANGE','fnacimiento',dd))      
  }


 const paisHandler = prop => event => { 
  const { value } = event ? event : '0'  
  dispatch(crudActions.changeValue('CLIENTES_CHANGE',prop,value))
}

const submitHandle = event => {       
    event.preventDefault()        
    if(item.id)
    {
      dispatch(crudActions.putUnit('clientes',item))            
    }else{
      dispatch(crudActions.createUnit('CLIENTES_ADD','clientes',item))      
    }    
 }

 useEffect(() =>{          
      console.log('cargaFormClientes')         
    return () =>{             
        dispatch({type:'CLIENTES_RESET_ITEM'})               
        dispatch(crudActions.getData('CLIENTES_DATA','clientes',1, 12, 'nombres','ASC'))
        console.log('descargar cargaFormClientes') 

    };
  }, []);

 return (    
      <div className="herramientas">                 
        <Row>
          <Col md={9}>
            <Form onSubmit={ submitHandle}>   
            <h5>Datos de contanto </h5>
            <div className="sub-form">              
              <Row form>
                <Col md={8}>
                  <FormGroup>
                    <Label for="eNombres">Nombres</Label>
                    <Input type="text" name="nombres" id="eNombres" placeholder="nombre"  value={item.nombres || ''}
                      onChange={changeHandler} required/>    
                  </FormGroup>    
                </Col>
                <Col md={4}>
                 <FormGroup>
                    <Label for="eCi">Ci</Label>
                    <Input type="text" name="ci" id="eCi"  value={item.ci || ''} onChange={ changeHandler}  required/>
                  </FormGroup>                      
                </Col>
              </Row>
              
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="eGenero">Genero</Label>
                    <Select defaultValue={sexos[0]} name="sexo" id="sexo" options={sexos} isClearable={true} value={defaultVal(sexos,item.sexo)}                                                                                                                                
                          onChange={ changesHandler('sexo')}  />
                  </FormGroup>   
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="eFnacimiento">F.Nacimiento</Label>
                    <DatePicker 
                      className="calendario"
                      onChange={  dateHandler() } 
                      value={item.fnacimiento ? new Date(item.fnacimiento): new Date()}/>
                  </FormGroup>   
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="eNit">Nit</Label>
                    <Input type="text" name="nit" id="eNit"  value={item.nit || ''} onChange={ changeHandler}  />
                  </FormGroup>    
                </Col>
              </Row>

              <Row form>                
                <Col md={8}>
                  <FormGroup>
                    <Label for="eMail">Email</Label>
                    <Input type="text" name="email" id="eMail"  value={item.email || ''} onChange={ changeHandler}  />
                  </FormGroup>   
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="eTelefono">Teléfono</Label>
                    <Input type="text" name="telefono" id="eTelefono"  value={item.telefono || ''} onChange={ changeHandler}  />    
                  </FormGroup>    
                </Col>
              </Row>

              <Row form>
                <Col md={8}>
                  <FormGroup>
                    <Label for="ePais">Pais</Label>
                    <Select                                                               
                          defaultValue={paises[0]}
                          name="pais"    
                          id="pais"                    
                          options={paises}      
                          isClearable={true}                          
                          value={defaultVal(paises,item.pais)} 
                          onChange={ paisHandler('pais')}                           
                          />
                  </FormGroup>    
                </Col>                
                <Col md={4}>
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
              </Row>

              <FormGroup>
                <Label for="eDireccion">Dirección</Label>
                <Input type="text" name="direccion" id="eDireccion"  value={item.direccion || ''} onChange={ changeHandler}  />
              </FormGroup>      
      
            <Button 
              type="submit"
              className={item.id ?"btn-md btn-warning mt-2" : "btn-md btn-info mt-2"}>
              <FontAwesomeIcon icon={faSave} />  
              {' '} {item.id ? " Actualizar" : " Guardar"}
            </Button>
          </div>   
        </Form>    
      </Col>


          {item.id ? 
          <Col md={3} >                          
              <ClienteImagen/>
          </Col>: null
          }            
        </Row>  
      </div>               
  );
}

export default ClienteForm