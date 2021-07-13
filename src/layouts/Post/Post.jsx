import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginView from "../../pages/Seguridad/LoginView.jsx";
import RegistroView from "../../pages/Registro/RegistroView.jsx";


function Post (){
  return(
    <>        

    <Switch>
      <Route path="/login/" component={LoginView} />   
      <Route path="/registro/" component={RegistroView} />                    
    </Switch>
    </>
    )
}     
  
export default Post;
