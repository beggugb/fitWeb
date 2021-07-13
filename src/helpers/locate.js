export const paises =[
        { value: "Argentina", label:"Argentina" },
        { value: "Bolivia", label:"Bolivia" },
        { value: "Brasil", label:"Brasil" },
        { value: "Colombia", label:"Colombia" },
        { value: "Chile", label:"Chile" },
        { value: "Ecuador", label:"Ecuador" },
        { value: "Paraguay", label:"Paraguay" },
        { value: "Peru", label:"Peru" },
        { value: "Uruguay", label:"Uruguay" },
        { value: "Venezuela", label:"Venezuela" },
    ]

export const ciudades = [    
        { value: "Cordova", label:"Argentina", indexi:"Argentina" },
        { value: "Rosario", label:"Rosario", indexi:"Argentina" },
        { value: "Beni", label:"Beni", indexi:"Bolivia" },
        { value: "Cochabamba", label:"Cochabamba", indexi:"Bolivia" },
        { value: "La Paz", label:"La Paz", indexi:"Bolivia" },
        { value: "Oruro", label:"Oruro", indexi:"Bolivia" },
        { value: "Santa Cruz", label:"Santa Cruz", indexi:"Bolivia" },
        { value: "Sucre", label:"Sucre", indexi:"Bolivia" },
        { value: "Tarija", label:"Tarija", indexi:"Bolivia" }
]    

export const getCiudades = (dato) =>{            
        return ciudades.filter(item =>
            item.indexi === dato
          )
      
      }
