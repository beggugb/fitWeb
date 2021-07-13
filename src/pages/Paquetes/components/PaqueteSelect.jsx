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

function PaquetesElect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.paquetes.data)
  const item = useSelector(state => state.paquetes.item)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('PAQUETES_LISTA','paquetes');
    }
     return () =>{            
        dispatch(crudActions.setReset('PAQUETES_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  const changeHandler = event => {    
    let io = event ? event.value: 0
    let va = event ? event.valor: 0
    let da = event ? event.diario: false     
    dispatch(crudActions.changeValue('PAQUETES_CHANGE','id',io))
    dispatch(crudActions.changeValue('PAQUETES_CHANGE','valor',va))   
    dispatch(crudActions.changeValue('PAQUETES_CHANGE','diario',da))   
   }
 
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="paqueteId"    
            id="paqueteId"                    
            options={data}      
            isClearable={true} 
            onChange={ changeHandler }                         
            value={defaultVal(data,item.id)}                                   
        />
    </>
  );
}

export default PaquetesElect