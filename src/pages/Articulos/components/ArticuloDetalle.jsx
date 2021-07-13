import React, { useRef }  from 'react'
import Moment from 'react-moment';
import { useSelector } from 'react-redux'
import { apiErp } from "../../../helpers";
import {     
  Table,
  Col,
  Row,    
  Button } from "reactstrap";

import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    const fechaHoy = new Date(); 
    return (
      <>
    <div className="invoice-box">        
    <p className="text-right">Fecha Emisión : <Moment format="DD/MM/YYYY">{ fechaHoy }</Moment></p>        
    <h5 className="text-center mb-4"><b>Kardex Articulo</b></h5>    
    
    <Row>
      <Col md="4">
        <img
          alt="articulo"
          className="img-perfils"
          src={apiErp + "/static/images/articulos/lg/" + this.props.particulo.filename}
        />
      </Col>
      <Col md="8">
        <div className="soles">     
        <Table className="table-reporteh">
          <tbody>
            <tr>  
                <td width="40%">Id:</td>
                <td width="60%">{this.props.particulo.id}</td>
            </tr>
            <tr>  
                <td width="40%">Código:</td>
                <td width="60%">{this.props.particulo.code}</td>
            </tr>
            <tr>  
                <td width="40%">Nombre:</td>
                <td width="60%">{this.props.particulo.nombre}</td>
            </tr>
            <tr>  
                <td width="40%">Categoria:</td>
                <td width="60%">{this.props.particulo.Categorium.nombre}</td>
            </tr>
            <tr>  
                <td width="40%">Precio Venta:</td>
                <td width="60%">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.particulo.pventa)}</td>
            </tr>
            <tr>  
                <td width="40%">Variantes:</td>
                <td width="60%">{this.props.particulo.variantes}</td>
            </tr>
            <tr>  
                <td width="40%">Sotck:</td>
                <td width="60%">{this.props.particulo.stock}</td>
            </tr>
                      
          </tbody>
        </Table>  
        </div>
      </Col>
    </Row>

    <p className="mt-3" ><b> Usuario : </b>{this.props.puser.nombre}</p>   

    </div>   
    </> 
    );
  }}


function ArticuloDetalle ({ user, articulo }) {    
    const componentRef = useRef();   
    const {item} = useSelector(state => state.articulos)
 
return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            particulo={item}            
        />
    </div>
     )
}


export default ArticuloDetalle