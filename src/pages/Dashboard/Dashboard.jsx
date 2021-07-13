import React from 'react';
import {  
  Row,
  Col,
  Card, CardHeader, CardTitle, CardBody
} from "reactstrap"

import Calendar from '../Tareas/components/Calendar'

function Dashboard () {          
   
  return (
    <div className="content">     
    <div className="main-contenido">
    
      <Row>
        <Col md="8">
          <Card>
          <CardHeader>
            <CardTitle>Tareas</CardTitle>                                    
            </CardHeader>
            <CardBody>
               <Calendar/>   
            </CardBody>
          </Card>
        </Col>
        <Col md="4">          
          <Card>
          <CardHeader>
            <CardTitle>Procesos</CardTitle>                                    
            </CardHeader>
            <CardBody>
                  
            </CardBody>
          </Card>

          <Card>
          <CardHeader>
            <CardTitle>Cajas</CardTitle>                                    
            </CardHeader>
            <CardBody>
                  
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </div> 
  );
}

export default Dashboard