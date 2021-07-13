import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import SucursalesTable from '../Sucursales/components/SucursalesTable'
import SucursalForm from './components/SucursalForm'

function SucursalesView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.getReset('SUCURSALES_RESET'))       
        console.log('descarga')
    };
  }, [dispatch]);
  
  return (
    <>         
    <SucursalForm/>
    <SucursalesTable/>
    </> 
  );
}

export default SucursalesView