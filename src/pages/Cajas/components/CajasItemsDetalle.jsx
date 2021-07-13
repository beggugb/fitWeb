import React, { useRef, useEffect }  from 'react'
import Moment from 'react-moment';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {     
  Table,    
  Button } from "reactstrap";

import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    const fechaHoy = new Date(); 
    return (
      <>
    <div className="invoice-box">        
    <p className="text-right">Fecha Emisión : <Moment format="DD/MM/YYYY">{ fechaHoy }</Moment></p>        
    <h5 className="text-center"><b>Resumen de Caja</b></h5>
    <p className="text-right">Fecha Caja:<Moment format="DD/MM/YYYY">{ this.props.pcaja.createdAt }</Moment></p>
    
    <div className="sol">     
     <Table className="table-reporteh">
            <tbody>
            <tr>  
                <td>Nro:</td><td>{this.props.pcaja.id}</td>
                <td>Usuario:</td><td>{this.props.puser.nombre} </td>                                         
            </tr>
            <tr>  
                <td>$ Inicial:</td>                
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoInicial)}</td>
                <td>$ Ingresos:</td>
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoIngreso)}</td>
            </tr>            
            <tr>
                <td>$ Egresos:</td>
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoEgreso)}</td>
                <td>$ Total:</td>
                <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pcaja.montoFinal)}</td>
            </tr>            
            </tbody>
          </Table>  
          </div>
    

    <div className="sol">
        <Table className="table-reporteb">
        <thead>
            <tr>  
                <th width="10%" className="text-dark">#</th>
                <th width="10%" className="text-dark">Fecha</th>
                <th width="40%" className="text-dark">Detalle</th>
                <th width="10%" className="text-dark">Tipo</th>
                <th width="20%" className="text-dark">Monto</th>          
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
          </div>  

      <p><b> Usuario : </b>{this.props.puser.nombre}</p>   

    </div>   
    </> 
    );
  }}


function CajasItemsDetalle ({ user, caja, data }) {    
const dispatch = useDispatch()
const componentRef = useRef();   

 useEffect(() =>{        
     return () =>{            
        dispatch(crudActions.setReset('CAJAS_RESET_ITEM'))
        dispatch(crudActions.setReset('CAJAS_ITEMS_RESET'))
    };
  }, [dispatch]);
return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            pcaja={caja}
            pdata={data}
        />
    </div>
     )
}


export default CajasItemsDetalle