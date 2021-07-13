import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tpvActions } from '../../../actions/tpv.actions'


import { apiErp } from "../../../helpers";


import {  
  Card
} from "reactstrap"


function ArticulosList ({getComponent}) {          
  const dispatch = useDispatch()   
  const data = useSelector(state => state.articulos.data)  
  const {items, sumaTotal, cantidadTotal} = useSelector(state => state.ventas)  


  const add = (articulo) => {      
    let venta  = [...items]
    let sTotal  = sumaTotal
    let cTotal = cantidadTotal
    let repeat = false

    venta.map((item, index) =>{        
      
        if(item.articuloId === articulo.id)
        { 
          venta[index].cantidad = venta[index].cantidad + 1;           
          venta[index].precioTotal = venta[index].cantidad *  parseFloat(articulo.pventa);          
          sTotal = sTotal + parseFloat(articulo.pventa);  
          cTotal = cTotal + 1;
          repeat = true;
    
        }
        return null
      })     

    
    if(!repeat)
      {
        let itemVenta = {};
        itemVenta.cantidad = 1;  
        itemVenta.precioUnitario = parseFloat(articulo.pventa)
        itemVenta.precioTotal = itemVenta.cantidad * itemVenta.precioUnitario;
        itemVenta.tipo= "venta";
        itemVenta.stock = parseFloat(articulo.stock) -1;        
        itemVenta.articuloId = articulo.id; 
        itemVenta.nombre = articulo.nombre;       
        venta.push(itemVenta);   
        cTotal = cTotal +1;
        sTotal = sTotal + parseFloat(itemVenta.precioTotal);
        /*this.props.addItems(venta, sumaTotal, cantidadTotal); */        

      }
      dispatch(tpvActions.addItems(venta, sTotal, cTotal))

  }

 
  
  
return (        
  <div className="larticulos">
    {data.map((item) => (                                 
        <Card 
          onClick={() => {add(item)}}
          className="articulo" 
          key={item.id}>
          <div className="imagen">
           <img
              alt="articulo"
              className="img-articulo"
              src={apiErp + "/static/images/articulos/md/" + item.filename}
            />
          </div>          
          <div className="precio">          
          {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.pventa)}
          </div>
          <div className="texto">
          {item.nombre}
          </div>
        </Card>

       ))} 
      </div>    
   );
}

export default ArticulosList