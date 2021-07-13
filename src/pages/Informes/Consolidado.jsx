import React, { useRef }  from 'react'
import Moment from 'react-moment';
import {     
  Table,    
  Button } from "reactstrap";
import { useSelector } from 'react-redux'


import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    
    return (
      <>
    
    <div className="invoice-box">
    <div className="sol">
    <h5 className="text-center mb-2">INFORME CONSOLIDADO</h5>   
    <h6 className="text-center" >
    ( <Moment format="DD/MM/YYYY">{this.props.pdesde}</Moment> ) - 
    ( <Moment format="DD/MM/YYYY">{this.props.phasta}</Moment> )
    </h6>                           
    <h6 className="ml-5">Total : 
    {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pdetalle)}
    </h6>
    </div> 


    <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>                      
                    <th width="30%" className="text-dark">Planes</th>
                    <th width="20%" className="text-dark">Costo</th>
                    <th width="20%" className="text-dark">Cantidad</th>
                    <th width="30%" className="text-dark">Total</th>          
                </tr>
            </thead>
        {this.props.pdata && (
            <tbody>
                {this.props.pdata.map((item) => (
                  <tr key={item.paqueteId}>
                    <td>{item.Paquete.nombre}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.Paquete.valor)}</td>                    
                    <td>{item.cantidad}</td>                       
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.total)}</td>
                  </tr>  
                  ))}
            </tbody>
        )}
         </Table>                    
           </div>    
      <p className="text-dark"><b> Usuario : </b>{this.props.puser.nombre}</p>    
    </div>     
    </> 
    );
  }}


function Consolidado () {    
  const componentRef = useRef();   
  const {detalle, consolidado, desde, hasta } = useSelector(state => state.informes)  
  let user = JSON.parse(localStorage.getItem('user'))
   let us = JSON.parse(localStorage.getItem('user')) 

return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={us}
            pdetalle={detalle}
            pdata={consolidado}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Consolidado