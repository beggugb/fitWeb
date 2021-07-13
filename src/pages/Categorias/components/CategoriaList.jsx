import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tpvActions } from '../../../actions/tpv.actions'
import { useCallback } from 'react';
import {  
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

function CategoriaList ({getComponent}) {          
  const dispatch = useDispatch()    
  const data = useSelector(state => state.categorias.data)   
  const makeHttpRequestWithPage = useCallback((pag,num,categoria) =>{      
     dispatch(tpvActions.getArticulos('ARTICULOS_DATA','tpv',pag,num,categoria)) 
  },[dispatch])

   
return (        
    
    <Nav className="lcategoria">
      <NavItem>
        <NavLink>
          <Button 
            className={"btn btn-warning btn-xs"}            
            onClick={() => {makeHttpRequestWithPage(1,20,0)}} >
            <FontAwesomeIcon icon={faTags} />{' '} {'Home'}
          </Button>
        </NavLink>
      </NavItem>
      
    {data.map((item) => (                           
      <NavItem key={item.value}>
        <NavLink>
          <Button 
            className={"btn btn-warning btn-xs"}            
            onClick={() => {makeHttpRequestWithPage(1,20,item.value)}} >
            <FontAwesomeIcon icon={faTags} />{' '} {item.label}
          </Button>
        </NavLink>
      </NavItem>
    ))}
    </Nav>
   );
}

export default CategoriaList