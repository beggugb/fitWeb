import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { totalesActions } from '../../../actions'

import {      
  Row, 
  Col
  
} from "reactstrap";

class Pcontrol extends React.Component {  
constructor(props){
    super(props);
    this.state = {      
      
    };    
} 



render() {      
    return (     
      <>
      <Row>
        <Col md="7" className="cdrs">                            
              <div className="dbodys">
              <h3 className="dheader">Ingreso vs Comision</h3>
               
              </div>              
        </Col>            
        <Col md="5" className="cdrs">              
              <div className="dbodys">
              <h3 className="dheader">Resumen de Pagos</h3>
               
              </div>              
        </Col>            
      </Row>          
      
      <Row className="mt-2">
        <Col md="7" className="cdrs">              
           <div className="dbodys">
              <h3 className="dheader">Rendimiento de Matriz</h3>
               
             </div>              
        </Col>            
        <Col md="5" className="cdrs">              
              <div className="dbodys">
              <h3 className="dheader">Nuevos Miembros</h3>
               
              </div>              
        </Col>
      </Row>  
     </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...totalesActions
    },
    dispatch,
  )  
})

const mapStateToProps = state => ({  
  users: state.users
});

export default connect(mapStateToProps,mapDispatchToProps)(Pcontrol);