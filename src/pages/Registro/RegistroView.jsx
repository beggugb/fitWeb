import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Moment from 'react-moment'
import {  
  Row,
  Col,  
  Table
} from "reactstrap"

import RegistroForm from './components/RegistroForm'
import { apiErp } from "../../helpers";
function RegistroView () {              
  const { cliente, membresia, mensaje, bandera  } = useSelector(state => state.registros)
  const [mount, setMount] = useState(false) 
  const audioTune1 = new Audio('http://192.168.0.100:4000/api/static/audios/acceso.mp3');
  const audioTune2 = new Audio('http://192.168.0.100:4000/api/static/audios/denegado.mp3');

  const [playInLoop1] = useState(false);
  const [playInLoop2] = useState(false);
 
   const playSound1 = () => {
    audioTune1.play();
  }
  const playSound2 = () => {
    audioTune2.play();
  }

   useEffect(() => {
     if(!mount) {
      setMount(true); 
      audioTune1.load();
      audioTune2.load();
    }
    }, [mount,audioTune1,audioTune2])

     useEffect(() => {
      if(!mount) {
      setMount(true); 
      audioTune1.loop = playInLoop1;
      audioTune2.loop = playInLoop2;
      }
    },[playInLoop1,playInLoop2,audioTune1.loop,audioTune2.loop,mount])
 
    switch(bandera){
      case 1:
        playSound1()
      break;
      case 2:
        playSound2()
      break;
      case 3:
        playSound2()
      break;  
      default:
      break;
    }
  
  return (    
    <div className="registro">
      <div className="contenedor">        
        <div className="contenedores">
          <Row>
            <Col md={4}>               
                <img
          alt="..."
          className="avataru"
          src={require("../../assets/img/logo.png")}
        />
        
               
            </Col>
            <Col md={8}>
              <RegistroForm/>              
            </Col>
          </Row>

          <Row className="registroff">
            <Col md={4}>
               <div className="registroi">       
                <img
                  alt="cliente"
                  className="img-perfiles"
                  src={apiErp + "/static/images/clientes/lg/" + cliente.filename}
                />
               </div>
            </Col>
            <Col md={8}>
              <div className="registrod">    
              <p>{mensaje}</p>
              <div className="table-singles">                
                <Table className="table-simples">
                  <thead>
                    <tr>
                    <th className="txtrea" width="25%">NOMBRES :</th>
                    <td width="75%" className="txtregv">{cliente.nombres}</td></tr>  
                    
                    <tr>
                    <th className="txtrea" width="25%">CI :</th>
                    <td width="75%" className="txtreg">{cliente.ci}</td></tr>

                    <tr>
                    <th className="txtrea" width="25%">PAQUETE :</th>
                    <td width="75%" className="txtrega">{membresia.Paquete.nombre}</td></tr>
                    
                    <tr>
                    <th className="txtrea" width="25%">INGRESOS :</th>
                    <td width="75%" className="txtreg">{membresia.intros}</td></tr>
                    
                    <tr>
                    <th className="txtrea" width="25%">VIGENCIA :</th>
                    <td width="75%" className="txtreg">
                    <Moment format="DD/MM/YYYY">{membresia.fvigencia}</Moment></td></tr>
                  </thead>
                </Table>  
              </div>  
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default RegistroView