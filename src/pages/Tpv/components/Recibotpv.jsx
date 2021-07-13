import React from 'react'
import Moment from 'react-moment';
import { Table } from "reactstrap";

export class Recibotpv extends React.PureComponent {
  render() {
    let fecha = new Date()
    return (
     <div className="invoice-recibo">      
        <h6 className="text-center mb-2">NOVA FITT</h6>
        <h6 className="text-center mb-2">Fittnes Center</h6>        
        <p className="text-dark"><b>Fecha : </b><Moment format="DD/MM/YYYY">{fecha}</Moment></p>  
        <p className="text-dark"><b>Detalle : </b>Venta - punto de venta</p>         
        <p className="text-dark"><b>Usuario : </b>{this.props.user.nombre}</p>         

        <div className="sol mt-3">
        {this.props.items && (
          <Table className="table-reporte">    
          <tbody>    
            {this.props.items.map((item) => (
            <tr key={item.articuloId}>                      
              <td width="70%">{item.nombre}</td>                                            
              <td width="10%">{item.cantidad}</td>                      
              <td width="20%">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.precioTotal)}
              </td>
            </tr>
            ))}  
           <tr>
            <td width="70%">
            Total :
            </td>
            <td width="10%">
            { this.props.cantidadTotal}
            </td>
            <td width="20%">
            {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.sumaTotal)}
            </td>
          </tr>          

          </tbody>  
          </Table>             )}
        
        </div>    
         
    </div>      
    );
  }
}

export default Recibotpv;
