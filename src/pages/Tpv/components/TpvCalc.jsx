import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tpvActions } from '../../../actions/tpv.actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap"


function TpvCalc ({getComponent}) {          
  const dispatch = useDispatch()   
  const { modalView, sumaTotal } = useSelector(state => state.ventas)  


  const clear = () => {  
   dispatch(tpvActions.resetTpv())
  }

   const toggleModalView = () => {        
    if(sumaTotal !== 0)
    {      
      let est = modalView === true ? false : true;        
      dispatch(tpvActions.viewModal(est))  
    }else{
      dispatch(tpvActions.mensaje("Debe ingresar productos !!"))  
    }    
  };
  
return (        
    <div className="tpvcalc">                        
      <Button 
        onClick={() => { clear() }}
        className="btn btn-danger btn-lg">
        <FontAwesomeIcon icon={faTrash} size="lg"/>
      </Button>
        
      <Button 
        onClick={() => { toggleModalView() }}
        className="btn btn-warning btn-lg">
        <FontAwesomeIcon icon={faDollarSign} size="lg"/>
      </Button>        
    </div>    
   );
}

export default TpvCalc