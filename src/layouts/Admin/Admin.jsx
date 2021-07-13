import React,{useState,useEffect,useCallback} from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { Nav, Button } from "reactstrap";
import logo from "../../assets/img/logos.png";
import { useDispatch } from 'react-redux'
import { userActions } from '../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
 
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import Dashboard from "../../pages/Dashboard/Dashboard.jsx";

import Clientes from "../../pages/Clientes/ClientesView";
import Membresias from "../../pages/Membresia/MembresiaView";
import Notas from "../../pages/Notas/NotasView";
import Cajas from "../../pages/Cajas/CajasView";
import CajasItems from "../../pages/CajasItems/CajasItemsView";

import Configuracion from "../../pages/Configuracion/ConfiguracionView";
import Informes from "../../pages/Informes/InformesView";

import IMembresias from "../../pages/Informes/MembresiasView";
import ICajas from "../../pages/Informes/CajasView";
import IRegistros from "../../pages/Informes/RegistroView";
import Consolidado from "../../pages/Informes/ConsolidadoView";

import Articulos from "../../pages/Articulos/ArticulosView";
import Tpv from "../../pages/Tpv/TpvView";


import Error from "../Error.jsx";

function Admin (){
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false) 
  const [itemr, setItemr] = useState([])   
  const modulos = JSON.parse(localStorage.getItem('items')) 
  let us = JSON.parse(localStorage.getItem('user'))

  const cahrgeModule = useCallback((name, tab, pky) =>{ 
    let items = [...itemr];
    modulos.map((prop, key) => {
      var dato = {
        path: prop.path,
        name: prop.name,
        icon: prop.icon,
        component: verificar(prop.component),
        layout: prop.layout,
      };
      items.push(dato);
      return null;
    });

    setItemr(items)
    
  },[itemr,modulos]);

  const verificar = (component) => {
   switch (component) {
      case "Dashboard":
        return Dashboard;      
      case "Clientes":
        return Clientes;
      case "Cajas":
        return Cajas;
      case "Configuracion":
        return Configuracion;
      case "Informes":
        return Informes;
      case "Articulos":
        return Articulos;            
      case "Tpv":
        return Tpv;            
      default:
        return null;
    }
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  }; 

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      cahrgeModule(); 
      console.log('carga')
      
   }
    return () =>{             
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))               */    

    };
  }, [mount, cahrgeModule]);

  const logoutt = () => {    
    dispatch(userActions.logout())  
  };

   
  return(
    <> 
    <div className="wrapper">  
    <div className="sidebar" >
        <div className="sidebar-wrapper" >          
            <div className="logo mb-2">
              <div className="logo-img">
                <img src={logo} alt="react-logo" />              
              </div>             
            </div>          
           <Nav>
           <li>
            <NavLink
                  to="/admin/dashboard"
                  className="nav-link"
                  activeClassName="active"
                  >
                  <i className="fas fa-tachometer-alt"/>
                  <p className="text-white">
                  Dashboard
                  </p>
            </NavLink>
          </li>

            {itemr.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li key={key}>
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"                    
                  > 
                    <p>{prop.name}</p>                    
                  </NavLink>
                </li>
              );
            })}
            <li
              className="active-pro"
            >              
            </li>
          </Nav>
        </div>
      </div>

      <div className="main-panel" >   
        <div className="nav-unity" expand="lg">        
          <div className="logout"> 
            <div className="logouttxt">                      
               <b>Usuario : </b>{ us.nombre } 
            </div>              
            <div className="logoutitems">                      
                <Button className="btn btn-danger btn-xs" onClick={() => {logoutt()}} >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Button>    
            </div>              
          </div>          
        </div>

        <Switch>
          {getRoutes(itemr)}          
           <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/iclientes" component={Informes} />
              <Route path="/admin/imembresias" component={IMembresias} />
              <Route path="/admin/icajas" component={ICajas} />
              <Route path="/admin/iregistro" component={IRegistros} />
              <Route path="/admin/consolidado" component={Consolidado} />
              <Route path="/admin/membresia/:clienteId" render={(props) => <Membresias {...props} />}/>
              <Route path="/admin/notas/:notaId" render={(props) => <Notas {...props} />}/>  
              <Route path="/admin/cajasitems/:cajaId" render={(props) => <CajasItems {...props} />}/>            
          <Route component={Error} />
        </Switch>
      </div>
    </div>  
    </>
    )
}     
  
export default Admin;
