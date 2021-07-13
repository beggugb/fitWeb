import { combineReducers } from "redux";
import { reducer as toastrReducer} from 'react-redux-toastr'
import { users } from "./users.reducers";
import { tareas } from "./tareas.reducers";
import { procesos } from "./procesos.reducers";
import { clientes } from "./clientes.reducers";
import { empresas } from "./empresas.reducers";
import { usuarios } from "./usuarios.reducers";
import { sucursales } from "./sucursales.reducers";
import { roles } from "./roles.reducers";
import { articulos } from "./articulos.reducers";
import { marcas } from "./marcas.reducers";
import { categorias } from "./categorias.reducers";
import { lineas } from "./lineas.reducers";
import { paquetes } from "./paquetes.reducers";
import { membresias } from "./membresias.reducers";
import { notas } from "./notas.reducers";
import { cajas } from "./cajas.reducers";
import { cajasitems } from "./cajasitems.reducers";
import { registros } from "./registros.reducers";
import { informes } from "./informes.reducers";
import { ventas } from "./ventas.reducers";

const rootReducer = combineReducers({
  users,
  marcas,
  informes,
  registros,
  cajas,
  cajasitems,
  categorias,
  notas,
  membresias,
  paquetes,
  lineas,
  articulos,
  roles,
  usuarios,
  sucursales,
  tareas,
  procesos,
  clientes,
  empresas,
  ventas,
  toastr: toastrReducer
});

export default rootReducer;
