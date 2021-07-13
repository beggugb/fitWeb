import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { stylesErp } from '../../../helpers'
import Select from 'react-select'
const roles = [{"value":1,"label":"Administrador"},
               {"value":2,"label":"Usuario"},];
const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

function UsuarioForm () {     
  const dispatch = useDispatch()  
  const [visible,setVisible] = useState("password")
  
  
  const item = useSelector(state => state.usuarios.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('USUARIOS_CHANGE',name,value))  
 }

  const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('USUARIOS_CHANGE',prop,value))  
    
 }

const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      dispatch(crudActions.putList('USUARIOS_ADD','usuarios',item))            
    }else{
      dispatch(crudActions.createList('USUARIOS_ADD','usuarios',item))      
    }    
 }
 const ver = () => {       
  let io = visible === "password" ? "text" : "password"
  setVisible(io)
}


         
  return (    
      <div className="herramientas">         
        <h6>Registro de usuarios</h6>                        
           <Form onSubmit={ submitHandle}>  
            <h5>Datos </h5>
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
                            required                                              
                          />
                      </FormGroup>
                    </Col>
                    
                    <Col md="1" className="subcajas">
                      <Label>Rol :</Label>
                    </Col>
                    <Col md="4" className="subcajas">
                      <FormGroup>                                                   
                      <Select                                                               
                          defaultValue={roles[0]}
                          name="rolId"    
                          id="rolId"                    
                          options={roles}      
                          isClearable={true}                          
                          value={defaultVal(roles,item.rolId)}                                                                                                                                
                          onChange={ changesHandler('rolId')} 
                          styles={stylesErp} 
                          />                      
                      </FormGroup>
                    </Col>                    
                </Row>
                
                </div>
                

                <h5>Inicio de sessión</h5>                
                <div className="sub-form">
                <Row>                    
                    <Col md="2" className="subcajas">
                      <Label>Username :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="username"
                            id="username"                            
                            value={item.username}
                            onChange={ changeHandler }  
                            
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>
                        Password:                        
                      </Label>
                      
                    </Col>
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type={visible}
                            name="password"
                            id="password"                            
                            value={item.password}
                            onChange={ changeHandler }  
                            
                          />
                          
                      </FormGroup>
                      
                    </Col>
                    <Col md="1" className="subcajas mt-2">
                      <FontAwesomeIcon 
                      className="verp"
                      icon={visible === "password" ? faEyeSlash: faEye } 
                      onClick={ver}
                      /> 
                    </Col>
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                      <Button 
                      type="submit"
                      className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} {item.id ? " Actualizar" : " Guardar"}
                      </Button>
                      </FormGroup>  
                  </Col>
                                                               
                </Row>
                </div>                           
            
            </Form>                              
        </div>               
  );
}

export default UsuarioForm