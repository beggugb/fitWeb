import React, { useRef }  from 'react'
import Moment from 'react-moment';
import {     
  Table,  
  Row,
  Button,
  Col } from "reactstrap";

/*export class CajasItemsDetalle extends React.PureComponent {
import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';*/

import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    const fechaHoy = new Date(); 
    return (
      <>
    <div className="frecibos">
    <h5 className="text-center mb-2">INFORME DE CAJA N# {this.props.pcaja.id} </h5>                                 
           
      <Row>
        <Col md={11} className="nota ml-5">
          <Table className="table-simple">
            <tbody>
            <tr>  
                <th>Num:</th>
                <td>{this.props.pcaja.id}</td>
                <th>Fecha:</th>
                <td>{this.props.pcaja.createdAt} </td>                                         
            </tr>
            <tr>  
                <th>$ Inicial:</th>                
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoInicial)}</td>
                <th>$ Ingresos:</th>
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoIngreso)}</td>
            </tr>            
            <tr>
                <th>$ Egresos:</th>
              <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoEgreso)}</td>
                <th>$ Total:</th>
              <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoFinal)}</td>
            </tr>            
            </tbody>
          </Table>  
        </Col>
      </Row>


      <Row>
      <Col md={12}>
          <Table className="table-simple">
        <thead>
            <tr>  
                <th width="10%">#</th>
                <th width="10%">Fecha</th>
                <th width="40%">Label</th>
                <th width="10%">Tipo</th>
                <th width="20%">Monto</th>          
            </tr>
        </thead>
        {this.props.pdata && (
            <tbody>
                {this.props.pdata.map((item) => (
    <tr key={item.id}>
    <td>{item.id}</td>                      
    <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>                           
    <td>{item.label}</td>
    <td>{item.tipo}</td>
    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.monto)}</td>
                                              
                      
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>                              
          </Col>
      </Row>
      <p><b> Usuario : </b>{this.props.puser.nombre}</p>   

    </div>     
    </> 
    );
  }}


function Pagos ({ user, detalle, data }) {    
const componentRef = useRef();   
return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            pdetalle={detalle}
            pdata={data}
        />
    </div>
     )
}


export default Pagos