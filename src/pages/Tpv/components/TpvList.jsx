import React from 'react';
import { useSelector } from 'react-redux'
import { Table } from "reactstrap"


function TpvList ({getComponent}) {            
  const {items, sumaTotal, cantidadTotal} = useSelector(state => state.ventas)    
  
return (        
    <div className="tpvlist">                 
        {items && (
          <Table className="table-tpv">    
          <tbody>    
            {items.map((item) => (
            <tr key={item.articuloId}>                      
              <td width="70%">{item.nombre}
                <table>
                  <tbody>
                    <tr>
                        <td>Precio Unitario /
                          {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.precioUnitario)}
                        </td>
                    </tr>
                  </tbody>  
                </table>  
              </td>                                            
              <td width="10%">{item.cantidad}</td>                      
              <td width="20%">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.precioTotal)}
              </td>
            </tr>  
            ))}
          </tbody>  
          </Table>     
        )}
        {cantidadTotal !== 0 ? 
          <Table className="table-tpvs">  
          <tbody>
          <tr>
          <td width="70%">
          Total :
          </td>
          <td width="10%">
          { cantidadTotal}
          </td>
          <td width="20%">
          {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(sumaTotal)}
          </td>
          </tr>
          </tbody>            
          </Table>     
          : null
        }

  </div>    
   );
}

export default TpvList