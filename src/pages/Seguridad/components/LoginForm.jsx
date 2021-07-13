import React from "react";
import {    
    Col,
    Button,
    ButtonGroup,
    FormGroup,
    Form,
    Input,    
  } from "reactstrap";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLock } from "@fortawesome/free-solid-svg-icons";  

function LoginForm ({submitHandle, handleChange, username, password }){
  return(   
    <div className="login">    
    <Form className="form-login mt-3" onSubmit={submitHandle}>
    <h6>Iniciar Sessión</h6>
    <FormGroup row>
      <Col sm={2} className="io-blue">
        <FontAwesomeIcon icon={faUser} />
      </Col>
      <Col sm={10}>
        <Input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="username"
          onChange={handleChange("username")}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Col sm={2} className="io-blue">
        <FontAwesomeIcon icon={faKey} />
      </Col>
      <Col sm={10}>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          value={password}
          onChange={handleChange("password")}
        />
      </Col>
    </FormGroup>
      <div className="button-container">
        <ButtonGroup>
          <Button className="btn-info mt-5 btn-md">
            <FontAwesomeIcon icon={faLock} />
            {' '} Ingresar
          </Button>
        </ButtonGroup>
      </div>
  </Form>
  </div>   
    )
}     
  
export default LoginForm;
