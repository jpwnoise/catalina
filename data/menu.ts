type Producto = {
  id: string
  nombre: string
  precio: number
  imagen?: string
  descripcion?: string
}

export type Categoria = {
  nombre: string
  imagen: string
  productos: Producto[],
  icon?: string;
}

export const menu: Categoria[] = [

  {
    nombre: "Chilaquiles",
    imagen: "chilaquil.png",
    icon: "/menu/categorias/chilaquilIcon.png",
    productos: [
      { id:"ch1", nombre:"Sencillos", precio:85 },
      { id:"ch2", nombre:"Con fajitas de pollo", precio:130 },
      { id:"ch3", nombre:"Con huevos al gusto", precio:100 },
      { id:"ch4", nombre:"Con arrachera", precio:160 },
      { id:"ch5", nombre:"Con peinecillo", precio:120 }
    ]
  },

  {
    nombre:"Guisados",
    imagen:"guisados.png",
    icon:"/menu/categorias/guisadosIcon.png",
    productos:[
      { id:"g1", nombre:"Chicharrón en salsa guajillo", precio:100 },
      { id:"g2", nombre:"Chicharrón en salsa verde", precio:100 },
      { id:"g3", nombre:"Costilla en salsa guajillo", precio:100 },
      { id:"g4", nombre:"Costilla en chile morita", precio:100 },
      { id:"g5", nombre:"Pastor", precio:100 },
      { id:"g6", nombre:"Carne a la mexicana", precio:100 }
    ]
  },

  {
    nombre:"Huaraches",
    imagen:"huaraches.png",
    icon:"/menu/categorias/huarachesIcon.png",
    productos:[
      { id:"h1", nombre:"Peinecillo", precio:165 },
      { id:"h2", nombre:"Chorizo", precio:140 },
      { id:"h3", nombre:"Chistorra", precio:180 }
    ]
  },

  {
    nombre:"Molletes",
    imagen:"molletes.png",
    icon:"/menu/categorias/molletesIcon.png",
    productos:[
      { id:"m1", nombre:"Sencillos", precio:85 },
      { id:"m2", nombre:"Con arrachera", precio:180 },
      { id:"m3", nombre:"Con peinecillo", precio:120 },
      { id:"m4", nombre:"Con chorizo", precio:105 },
      { id:"m5", nombre:"Dulces", precio:75 }
    ]
  },

  {
    nombre:"Desayunos",
    imagen:"desayunos.png",
    icon:"/menu/categorias/desayunosIcon.png",
    productos:[
      { id:"d1", nombre:"Huevos al gusto", precio:100 },
      { id:"d2", nombre:"Omelette (2 ingredientes)", precio:120 },
      { id:"d3", nombre:"Gorditas rellenas (3 piezas)", precio:100 },

      { id:"d4", nombre:"Quesadilla sencilla", precio:75 },
      { id:"d5", nombre:"Quesadilla con chorizo", precio:85 },
      { id:"d6", nombre:"Quesadilla con peinecillo", precio:95 },
      { id:"d7", nombre:"Quesadilla con arrachera", precio:120 },

      { id:"d8", nombre:"Pellizcadas (3 piezas)", precio:139 }
    ]
  },

  {
    nombre:"Hotcakes y Waffles",
    imagen:"hotcakes.png",
    icon:"/menu/categorias/hotcakesIcon.png",
    productos:[
      { id:"hw1", nombre:"Hotcakes (2 piezas)", precio:85 },
      { id:"hw2", nombre:"Waffles (2 ingredientes)", precio:100 }
    ]
  },

  // 🔽 NUEVAS CATEGORÍAS DE LA IMAGEN

  {
    nombre:"Extras Desayuno",
    imagen:"extras.png",
    icon:"/menu/categorias/desayunosIcon.png",
    productos:[
      { id:"ex1", nombre:"Enchiladas verdes (5 piezas)", precio:140 },
      { id:"ex2", nombre:"Orden de pan dulce (2 piezas)", precio:45 },
      { id:"ex3", nombre:"Molcajete 350g", precio:250 }
    ]
  },

  {
    nombre:"Asados al carbón",
    imagen:"asados.png",
    icon:"/menu/categorias/cortesIcon.png",
    productos:[
      { id:"ac1", nombre:"Peinecillo", precio:165 },
      { id:"ac2", nombre:"Arrachera", precio:280 }
    ]
  },

  {
    nombre:"Machetes",
    imagen:"machete.png",
    icon:"/menu/categorias/entradasIcon.png",
    productos:[
      { id:"ma1", nombre:"Peinecillo", precio:260 },
      { id:"ma2", nombre:"Chorizo", precio:250 },
      { id:"ma3", nombre:"Arrachera", precio:295 },
      { id:"ma4", nombre:"Combinada", precio:310 }
    ]
  },

  {
    nombre:"Frutas y Postres",
    imagen:"postres.png",
    icon:"/menu/categorias/postresIcon.png",
    productos:[
      { id:"fp1", nombre:"Plato de fruta", precio:100 },
      { id:"fp2", nombre:"Plato de fruta con queso cottage", precio:120 },
      { id:"fp3", nombre:"Hotcakes (2 piezas)", precio:85 },
      { id:"fp4", nombre:"Waffles dulces", precio:100 }
    ]
  },

  // 🔽 RESTO DEL MENÚ ORIGINAL (SIN CAMBIOS PORQUE NO SALE EN IMAGEN)

  {
    nombre:"Entradas",
    imagen:"entradas.png",
    icon:"/menu/categorias/entradasIcon.png",
    productos:[
      { id:"e1", nombre:"Empanadas de camarón o marlín", precio:160 },
      { id:"e2", nombre:"Tacos gobernador", precio:160 },
      { id:"e3", nombre:"Tacos de frijol con queso", precio:70 },
      { id:"e4", nombre:"Alitas BBQ o búfalo", precio:130 },
      { id:"e5", nombre:"Alitas con salsa de aguachile", precio:130 },
      { id:"e6", nombre:"Queso fundido", precio:120 },
      { id:"e7", nombre:"Queso fundido con chorizo", precio:170 },
      { id:"e8", nombre:"Queso fundido con chistorra", precio:190 },
      { id:"e9", nombre:"Panela asada", precio:160 },
      { id:"e10", nombre:"Chistorra", precio:160 },
      { id:"e11", nombre:"Papas gajo / francesa", precio:95 },
      { id:"e12", nombre:"Chicharrón de pescado", precio:180 }
    ]
  },

  {
    nombre:"Camarones",
    imagen:"camarones.png",
    icon:"/menu/categorias/camaronesIcon.png",
    productos:[
      { id:"c1", nombre:"Empanizados", precio:180 },
      { id:"c2", nombre:"Mantequilla", precio:180 },
      { id:"c3", nombre:"Diabla", precio:180 },
      { id:"c4", nombre:"Mojo de ajo", precio:180 },
      { id:"c5", nombre:"Zarandeado", precio:180 },
      { id:"c6", nombre:"Ajillo", precio:180 },
      { id:"c7", nombre:"Veracruzana", precio:190 },
      { id:"c8", nombre:"Tamarindo", precio:190 },
      { id:"c9", nombre:"Mango", precio:190 },
      { id:"c10", nombre:"BBQ", precio:190 },
      { id:"c11", nombre:"Al coco", precio:195 },
      { id:"c12", nombre:"Momia", precio:210 }
    ]
  },

  {
    nombre:"Filetes",
    imagen:"filetes.png",
    icon:"/menu/categorias/filetesIcon2.png",
    productos:[
      { id:"f1", nombre:"Empanizado", precio:150 },
      { id:"f2", nombre:"Mantequilla", precio:150 },
      { id:"f3", nombre:"Gratinado", precio:150 },
      { id:"f4", nombre:"Tamarindo", precio:150 },
      { id:"f5", nombre:"Diabla", precio:150 },
      { id:"f6", nombre:"Mojo de ajo", precio:150 },
      { id:"f7", nombre:"Zarandeado", precio:150 },
      { id:"f8", nombre:"Veracruzana", precio:150 },
      { id:"f9", nombre:"Mango", precio:150 },
      { id:"f10", nombre:"BBQ", precio:150 },
      { id:"f11", nombre:"Ajillo", precio:150 }
    ]
  },

  {
    nombre:"Pulpo",
    imagen:"pulpo.png",
    icon:"/menu/categorias/pulpoIcon.png",
    productos:[
      { id:"p1", nombre:"Zarandeado", precio:260 },
      { id:"p2", nombre:"Mantequilla", precio:260 },
      { id:"p3", nombre:"Diabla", precio:260 },
      { id:"p4", nombre:"Mojo de ajo", precio:260 },
      { id:"p5", nombre:"BBQ", precio:260 },
      { id:"p6", nombre:"Veracruzana", precio:260 },
      { id:"p7", nombre:"Ajillo", precio:260 }
    ]
  },

  {
    nombre:"Aguachiles",
    imagen:"aguachile.png",
    icon:"/menu/categorias/aguachilesIcon.png",
    productos:[
      { id:"a1", nombre:"Rojo", precio:180 },
      { id:"a2", nombre:"Verde", precio:180 },
      { id:"a3", nombre:"Perla negra", precio:190 },
      { id:"a4", nombre:"Atún", precio:190 }
    ]
  },

  {
    nombre:"Sopas",
    imagen:"sopas.png",
    icon:"/menu/categorias/sopasIcon.png",
    productos:[
      { id:"s1", nombre:"Sopa de mariscos", precio:250 },
      { id:"s2", nombre:"Caldo de camarón", precio:230 },
      { id:"s3", nombre:"Crema de mariscos", precio:260 }
    ]
  },

  {
    nombre:"Pastas",
    imagen:"pastas.png",
    icon:"/menu/categorias/pastasIcon.png",
    productos:[
      { id:"pa1", nombre:"Alfredo", precio:160 },
      { id:"pa2", nombre:"Boloñesa", precio:160 }
    ]
  },

  {
    nombre:"Cortes",
    imagen:"cortes.png",
    icon:"/menu/categorias/cortesIcon.png",
    productos:[
      { id:"co1", nombre:"New York 400g", precio:330 },
      { id:"co2", nombre:"Ribeye 400g", precio:339 },
      { id:"co3", nombre:"Arrachera 400g", precio:280 },
      { id:"co4", nombre:"T-Bone 400g", precio:339 },
      { id:"co5", nombre:"Cowboy 550g", precio:480 },
      { id:"co6", nombre:"Tomahawk", precio:1100 },
      { id:"co7", nombre:"Costillas BBQ 500g", precio:270 },
      { id:"co8", nombre:"Vacío 400g", precio:339 }
    ]
  },

  {
    nombre:"Bebidas",
    imagen:"bebidas.png",
    icon:"/menu/categorias/bebidasIcon.png",
    productos:[
      { id:"b1", nombre:"Jugo", precio:45 },
      { id:"b2", nombre:"Licuado", precio:55 },
      { id:"b3", nombre:"Limonada", precio:60 },
      { id:"b4", nombre:"Naranjada", precio:60 },
      { id:"b5", nombre:"Agua fresca", precio:29 },
      { id:"b6", nombre:"Chocomilk", precio:45 },
      { id:"b7", nombre:"Chocolate caliente", precio:40 },
      { id:"b8", nombre:"Café de olla", precio:30 },
      { id:"b9", nombre:"Americano", precio:30 },
      { id:"b10", nombre:"Capuccino", precio:50 },
      { id:"b11", nombre:"Frapuccino", precio:65 },
      { id:"b12", nombre:"Cerveza", precio:40 }
    ]
  }

];