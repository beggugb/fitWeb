import React from 'react'
import Moment from 'react-moment';
import { Table } from "reactstrap";

export class Recibo extends React.PureComponent {
  render() {
    let fecha = new Date()
    return (
     <div className="invoice-recibo">      
        <h6 className="text-center mb-2">NOVA FITT</h6>
        <h6 className="text-center mb-2">Fittnes Center</h6>
        <div className="solh">
        <p className="text-dark"><b>Recibo # </b>{this.props.recibo.id}</p>
        <p className="text-dark"><b>Fecha : </b><Moment format="DD/MM/YYYY">{fecha}</Moment></p>
        <p className="mb-2 text-dark"><b>Cliente : </b>{this.props.recibo.cliente}</p>          
        <p className="text-dark"><b>Vigencia : </b><Moment format="DD/MM/YYYY">{this.props.membresia.ivigencia}</Moment> - <Moment format="DD/MM/YYYY">{this.props.membresia.fvigencia}</Moment></p>
        </div>
        <div className="sol">
        <Table className="table-reporte">
          <thead>
            <tr>                  
                <th width="70%">Detalle</th>                
                <th width="30%">Total</th>                
            </tr>
        </thead>
            <tbody>            
            <tr>                                  
                <td>{this.props.membresia.Paquete.nombre}</td>                      
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.recibo.importe)}</td>                
            </tr>            
            </tbody>
          </Table>
      </div>    
      <div className="solx">
      <p className="ml-3 text-dark">
      <b> Usuario : </b>{this.props.recibo.usuario}</p>  
      </div>        
    </div>      
    );
  }
}

export default Recibo;
