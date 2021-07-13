import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import { stylesErp } from '../../../helpers'

import { useCallback } from 'react';
import Select from 'react-select'
const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }

function UsuarioSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.usuarios.data)
  const item = useSelector(state => state.usuarios.item)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('USUARIOS_LISTA','usuarios/items');
    }
     return () =>{            
        dispatch(crudActions.setReset('USUARIOS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  const changeHandler = event => {    
    let io = event ? event.value: 0
    
    dispatch(crudActions.changeValue('USUARIOS_CHANGE','id',io))    
   }
 
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="usuarioId"    
            id="usuarioId"                    
            options={data}      
            isClearable={true} 
            onChange={ changeHandler }                         
            value={defaultVal(data,item.id)}             
            styles={stylesErp}              
        />
    </>
  );
}

export default UsuarioSelect