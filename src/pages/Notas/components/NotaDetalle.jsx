import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  membresiaActions } from '../../../actions'
import Moment from 'react-moment'
import {      
    Table,    
    Button,
    Row,
    Col
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactToPrint } from 'react-to-print';
import {     
  faFile,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

import { Recibo } from './Recibo';

function NotaDetalle() {              
  
  const dispatch = useDispatch()    
  const {item, plan } = useSelector(state => state.notas)  
  const cliente = useSelector(state => state.clientes.item)
  const membresia  = useSelector(state => state.membresias.item)  
  const user = JSON.parse(localStorage.getItem('user'))  
  
  
  const [recibo, setRecibo] = useState({    
    "importe" : 0,        
    "cliente" : "",
    "membresia" : "",
    "usuario" : ""
  })

  const componentRef = useRef();
  


  

  const preaprobar = (plan) => {    //xredux, payload, dato     
    let dato ={}
    dato.id = plan.id
    dato.notaId = item.id
    dato.importe = parseInt(plan.importe)
    dato.usuarioId = user.id 
    dato.cliente = cliente.nombres
    dato.membresia = membresia.Paquete.nombre
    dato.usuario = user.nombre    
    setRecibo(dato)
    dispatch(membresiaActions.setPagar('NOTAS_PAGAR','planes',dato))       
    handlePrint()           
  };


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,    
  });
 


  return (    
    <div className="financiera">
      <Row>
        <Col md={12} className="nota">
          <Table className="table-simple">
            <tbody>
            <tr>  
                <th>Cliente:</th>
                <td>{cliente.nombres}</td>
                <th>Paquete:</th>
                <td>{membresia.Paquete.nombre}</td>
                <th>Vigencia:</th>
                <td>{membresia.ivigencia} - {membresia.fvigencia}</td>
            </tr>
            <tr>    

                <th>Num:</th>
                <td>{item.id}</td>
                <th>N. cuotas:</th>
                <td>{item.ncuotas} </td>
                <th>Gestión:</th>
                <td>{item.gestion}</td>                                
            </tr>
            <tr>  
                <th>Total:</th>
                <td>{item.monto} Bs.</td>
                <th>Pago Total:</th>
                <td>{item.pagoTotal} Bs.</td>
                <th>Salto Total:</th>
                <td>{item.saldoTotal} Bs.</td>                                
            </tr>            
            </tbody>
          </Table>  
        </Col>
      </Row>


      <Row>
        <Col md={6}>          
          <div className="table-single">             
            <Table className="table-simple">
              <thead>
                  <tr>  
                      <th width="10%">#</th>
                      <th width="10%">Cuota</th>
                      <th width="20%">F.Pago</th>
                      <th width="30%">Monto</th>
                      <th width="20%">Estado</th>                
                      <th width="10%"></th>                
                  </tr>
              </thead>
                {plan && (
                <tbody>
                    {plan.map((item) => (
                        <tr key={item.id}>                      
                          <td>{item.id}</td>
                          <td>{item.cuota}</td>                                                       
                          <td><Moment format="DD/MM/YYYY">{item.fechaPago}</Moment></td>                      
                          <td>{item.importe} Bs.</td>                      
                          <td>{item.estado}</td>                      

                          <td>
                          {item.estado === "pagado" ? 
                          <Button className="btn btn-info btn-xs">
                          <FontAwesomeIcon icon={faFile} />
                          </Button>
                          :
                          <Button className="btn btn-warning btn-xs" onClick={() => {preaprobar(item)}} >
                          <FontAwesomeIcon icon={faDollarSign} />
                          </Button>
                        }
                                                
                          </td>      
                        </tr>  
                        ))}
                </tbody>
                )}
            </Table>    
          </div> 
        </Col>
        <Col md={5} className="recibos">        
        <Recibo 
            ref={componentRef} 
            user= {user}
            recibo={recibo}
            membresia={membresia}
            /> 
        </Col>
      </Row>

    </div>

  );
}

export default NotaDetalle