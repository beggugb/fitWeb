import React,{ useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { stylesErp } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import ArticuloImagen from './ArticuloImagen'

import CategoriasSelect from '../../Categorias/components/CategoriasSelect'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos = [
            {"value":"paquete","label":"paquete"},
            {"value":"unidad","label":"unidad"},
            {"value":"caja","label":"caja"}                
                ];

function ArticuloForm () {     
  const dispatch = useDispatch()
   
  const item = useSelector(state => state.articulos.item)  
  const categoria = useSelector(state => state.categorias.item)
       
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('ARTICULOS_CHANGE',name,value))  
 }

 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('ARTICULOS_CHANGE',prop,value))  
    
 }

 
const submitHandle = event => {       
    event.preventDefault()    
    let io  = item
    io.categoriaId = categoria.id
    
    if(item.id)
    {
      dispatch(crudActions.putUnit('articulos',io))            
    }else{
      dispatch(crudActions.createUnit('ARTICULOS_ADD','articulos',io))      
    }    

 }

 useEffect(() =>{          
      console.log('cargaFormClientes')         
    return () =>{             
        dispatch({type:'ARTICULOS_RESET_ITEM'})               
        dispatch(crudActions.getData('ARTICULOS_DATA','articulos',1, 12, 'nombre','ASC'))
        console.log('descargar cargaFormArticulos') 

    };
  }, []);
         
  return (    
      <div className="herramientas">         
        <h6>Registro de Articulos</h6>     
         <Row>
          <Col md={9}>
           <Form onSubmit={ submitHandle}>  
            <h5>Datos de contanto </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombre :</Label>
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
                      <Label>Categoria :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                      <CategoriasSelect/>
                      </FormGroup>
                    </Col>                                      
                </Row>
                <Row>
                     <Col md="2" className="subcajas">
                      <Label>Código :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="code"
                            id="code"                            
                            value={item.code}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col> 
                    <Col md="2" className="subcajas">
                      <Label>Variantes :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Select                                                               
                          defaultValue={tipos[0]}
                          name="variantes"    
                          id="variantes"                    
                          options={tipos}      
                          isClearable={true}                          
                          value={defaultVal(tipos,item.variantes)}                                                                                                                                
                          onChange={ changesHandler('variantes')} 
                          
                          />
                      </FormGroup>
                    </Col>
                                                                            
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>$Venta :</Label>
                    </Col>   
                    <Col md="5" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="pventa"
                            type="number"
                            name="pventa"                                                        
                            value={item.pventa}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col> 

                    <Col md="2" className="subcajas">
                      <Label>Stock :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="stock"
                            type="text"
                            name="stock"                                                        
                            value={item.stock}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col> 
                                                                          
                </Row>
            

                <Row>
                    <Col md="5" className="subcajas">
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
            </Col>
            <Col md={3} className="subcajas">                          
              <ArticuloImagen/>
            </Col>
          </Row>  
        </div>               
  );
}

export default ArticuloForm