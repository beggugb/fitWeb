import React from 'react';
import { useSelector} from 'react-redux'

import {  
  Row,
  Col
} from "reactstrap"
import { apiErp } from "../../../helpers";


function MembresiaDetalles () {     

  const { item } = useSelector(state => state.clientes)
  const membresia  = useSelector(state => state.membresias.item)

  return (    
      <div className="herramientas">          
         <Row>
          <Col md="3" className="cajas text-dark">Membresia Nota </Col>
          <Col md="5" className="clientedetalles">                
                <p><b>Cliente:</b> {item.nombres }</p>                
                <p><b>Paquete:</b> {membresia.Paquete.nombre }</p>
                <p><b>Vigencia:</b> {membresia.ivigencia}  -  {membresia.fvigencia }</p>                                    
          </Col>
          <Col md="4" className="clientefoto">
            <img
                    alt="cliente"
                    className="img-peri"
                    src={apiErp + "/static/images/clientes/lg/" + item.filename}
                  />  
          </Col>
         </Row>
      </div>               
  );
}

export default MembresiaDetalles