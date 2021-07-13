import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { userActions } from '../../actions/user.actions'
import LoginForm from './components/LoginForm'
import {  
  Row,
  Col
} from "reactstrap"

function LoginView () {          
  const dispatch = useDispatch()    
  const [user, setUser] = useState({
    username:"",
    password:""
  })
    
  const handleChange = prop => event => {                         
    setUser({      
        ...user,
        [prop]: event.target.value
    })        
  } 

  const submitHandle = event => {       
    event.preventDefault()        
    dispatch(userActions.login(user))
 }
  
  return (    
    <div className="pos">
      <div className="contenedor">
         <img
          alt="..."
          className="avatari"
          src={require("../../assets/img/logo.png")}
        />
          <LoginForm
           submitHandle={submitHandle}
           handleChange={handleChange}
           username={ user.username }
           password={ user.password }
          />  
          <div className="about">        
            <img
              alt="..."
              className="avataro"
              src={require("../../assets/img/logob.png")}
              />
            <p>beggu-bo.com</p>            
        </div>        
      </div>   
    </div>
  );
}

export default LoginView