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
    <h5 className="text-center mb-2">INFORME DE CAJAS</h5>   
    <h6 className="text-center" >
    ( <Moment format="DD/MM/YYYY">{this.props.pdesde}</Moment> ) - 
    ( <Moment format="DD/MM/YYYY">{this.props.phasta}</Moment> )
    </h6>                           
                       
     <h6 className="ml-3" >Total: { this.props.pdetalle }</h6>
     </div>


       <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>  
                    <th width="5%">#</th>
                    <th width="15%" className="text-dark">Usuario</th>
                    <th width="15%" className="text-dark">Total Inicial</th>
                    <th width="15%" className="text-dark">Total Ingreso</th>
                    <th width="15%" className="text-dark">Total Egreso</th>
                    <th width="15%" className="text-dark">Total Final</th>
                    <th width="15%" className="text-dark">Fecha Cierre</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>                                
                    <td>{item.Usuario.nombre ? item.Usuario.nombre : null}</td>                         
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoInicial)}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoIngreso)}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoEgreso)}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoFinal)}</td>
                    <td><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>                                               
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


function Cajas () {    
  const componentRef = useRef();   
  const { cajas, desde, hasta, total } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  
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
            pdetalle={total}
            pdata={cajas}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Cajas