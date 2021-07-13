import React from 'react';
import { useSelector } from 'react-redux'
import {  
  Row,
  Col
} from "reactstrap"

import { apiErp } from "../../../helpers";
import MembresiaForm from "./MembresiaForm"



function MembresIadetalle () {     
 
  const { item } = useSelector(state => state.clientes)
          
  return (    
      <div className="herramientas">                     
           <div className="subcaja">
               <Row>
                 <Col md="9" >
                    <MembresiaForm/>
                 </Col>
                 <Col md="3">                  
                  <img
                    alt="cliente"
                    className="img-per"
                    src={apiErp + "/static/images/clientes/lg/" + item.filename}
                  />                                    
                  
                 </Col>
               </Row>       
           </div>
        </div>               
  );
}

export default MembresIadetalle