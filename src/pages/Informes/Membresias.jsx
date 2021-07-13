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
    <h5 className="text-center mb-2">INFORME DE MEMBRESIAS</h5>   
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
                    <th width="5%">#</th>
                    <th width="40%" className="text-dark">Nombres</th>
                    <th width="30%" className="text-dark">Paquete</th>
                    <th width="20%" className="text-dark">F.Registro</th>
                    <th width="20%" className="text-dark">Monto</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>            
                    <td>{item.Cliente.nombres ? item.Cliente.nombres : 'n'}</td>                              
                    <td>{item.Paquete.nombre ? item.Paquete.nombre : 'n'}</td>
                    <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>                                               
                     <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.ingresos)}</td>
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


function Membresias () {    
  const componentRef = useRef();   
  const {detalle, membresias, desde, hasta } = useSelector(state => state.informes)  
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
            pdetalle={detalle}
            pdata={membresias}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Membresias