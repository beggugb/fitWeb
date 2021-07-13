import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import PaquetesTable from '../Paquetes/components/PaquetesTable'
import PaqueteForm from './components/PaqueteForm'

function PaquetesView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('PAQUETES_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <PaqueteForm/>
    <PaquetesTable/>
    </> 
  );
}

export default PaquetesView