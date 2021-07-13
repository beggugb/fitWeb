import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import UsuariosTable from './components/UsuariosTable'
import UsuarioForm from './components/UsuarioForm'

function UsuariosView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('USUARIOS_RESET'))       
        console.log('descarga')
    };
  }, [dispatch]);
  
  return (
    <>         
    <UsuarioForm/>
    <UsuariosTable/>
    </> 
  );
}

export default UsuariosView