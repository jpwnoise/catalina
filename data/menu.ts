type Producto = {
  id: string
  nombre: string
  precio: number
  imagen?: string
  descripcion?: string
}

export type Categoria = {
  nombre: string
  productos: Producto[]
}

export const menu: Categoria[] = [

{
nombre: "Chilaquiles",
productos: [
{ id:"chilaquiles1", nombre:"Chilaquiles sencillos", precio:50, descripcion:"Totopos en salsa acompañados con frijoles, crema y queso de rancho." },
{ id:"chilaquiles2", nombre:"Chilaquiles con fajitas de pollo", precio:100, descripcion:"Chilaquiles tradicionales servidos con fajitas de pollo." },
{ id:"chilaquiles3", nombre:"Chilaquiles con huevos al gusto", precio:90, descripcion:"Chilaquiles acompañados con huevos preparados al gusto." },
{ id:"chilaquiles4", nombre:"Chilaquiles con arrachera", precio:145, descripcion:"Chilaquiles con porción de arrachera a la plancha." },
{ id:"chilaquiles5", nombre:"Chilaquiles con peinecillo", precio:110, descripcion:"Chilaquiles con carne de res tipo peinecillo." }
]
},

{
nombre:"Guisados",
productos:[
{ id:"guisado1", nombre:"Chicharrón en salsa guajillo", precio:90, descripcion:"Chicharrón de cerdo guisado en salsa roja de guajillo." },
{ id:"guisado2", nombre:"Chicharrón en salsa verde", precio:90, descripcion:"Chicharrón cocinado en salsa verde casera." },
{ id:"guisado3", nombre:"Costilla en salsa guajillo", precio:90, descripcion:"Costillas de cerdo en salsa roja tradicional." },
{ id:"guisado4", nombre:"Costilla en chile morita", precio:90, descripcion:"Costilla preparada en salsa de chile morita." },
{ id:"guisado5", nombre:"Pastor", precio:90, descripcion:"Carne de cerdo estilo pastor sazonada." }
]
},

{
nombre:"Huaraches",
productos:[
{ id:"huarache1", nombre:"Huarache con peinecillo", precio:150, descripcion:"Huarache grande con carne de res y queso gratinado." },
{ id:"huarache2", nombre:"Huarache con chorizo", precio:130, descripcion:"Huarache con chorizo y queso gratinado." },
{ id:"huarache3", nombre:"Huarache con chistorra", precio:170, descripcion:"Huarache con chistorra y queso gratinado." }
]
},

{
nombre:"Molletes",
productos:[
{ id:"mollete1", nombre:"Molletes sencillos", precio:80, descripcion:"Pan tostado con frijoles y queso gratinado." },
{ id:"mollete2", nombre:"Molletes con arrachera", precio:180, descripcion:"Molletes acompañados con arrachera." },
{ id:"mollete3", nombre:"Molletes con peinecillo", precio:115, descripcion:"Molletes con carne de res tipo peinecillo." },
{ id:"mollete4", nombre:"Molletes con chorizo", precio:95, descripcion:"Molletes con chorizo tradicional." },
{ id:"mollete5", nombre:"Molletes dulces", precio:65, descripcion:"Molletes con cajeta, miel o mermelada." }
]
},

{
nombre:"Hotcakes y Waffles",
productos:[
{ id:"hotcake1", nombre:"Hotcakes", precio:79, descripcion:"Orden de dos hotcakes con miel o cajeta." },
{ id:"waffle1", nombre:"Waffles con ingredientes", precio:90, descripcion:"Waffle con dos ingredientes a elegir como fruta o chocolate." }
]
},

{
nombre:"Camarones",
productos:[
{ id:"camarones1", nombre:"Camarones empanizados", precio:180, descripcion:"Camarones empanizados y fritos." },
{ id:"camarones2", nombre:"Camarones a la mantequilla", precio:180, descripcion:"Camarones salteados en mantequilla." },
{ id:"camarones3", nombre:"Camarones a la diabla", precio:180, descripcion:"Camarones en salsa picante estilo diabla." },
{ id:"camarones4", nombre:"Camarones al mojo de ajo", precio:180, descripcion:"Camarones salteados con ajo." },
{ id:"camarones5", nombre:"Camarones zarandeados", precio:180, descripcion:"Camarones marinados estilo zarandeado." },
{ id:"camarones6", nombre:"Camarones al ajillo", precio:180, descripcion:"Camarones preparados con aceite de oliva y ajo." },
{ id:"camarones7", nombre:"Camarones veracruzana", precio:190, descripcion:"Camarones en salsa estilo veracruzano." },
{ id:"camarones8", nombre:"Camarones tamarindo", precio:190, descripcion:"Camarones en salsa dulce de tamarindo." },
{ id:"camarones9", nombre:"Camarones mango", precio:190, descripcion:"Camarones en salsa dulce de mango." },
{ id:"camarones10", nombre:"Camarones BBQ", precio:190, descripcion:"Camarones con salsa barbecue." },
{ id:"camarones11", nombre:"Camarones al coco", precio:195, descripcion:"Camarones empanizados con coco." },
{ id:"camarones12", nombre:"Camarones momia", precio:210, descripcion:"Camarones rellenos de queso y envueltos en tocino." }
]
},

{
nombre:"Filetes",
productos:[
{ id:"filete1", nombre:"Filete empanizado", precio:150, descripcion:"Filete de pescado empanizado." },
{ id:"filete2", nombre:"Filete mantequilla", precio:150, descripcion:"Filete de pescado a la mantequilla." },
{ id:"filete3", nombre:"Filete gratinado", precio:150, descripcion:"Filete cubierto con queso gratinado." },
{ id:"filete4", nombre:"Filete diabla", precio:150, descripcion:"Filete con salsa picante." },
{ id:"filete5", nombre:"Filete zarandeado", precio:150, descripcion:"Filete marinado estilo zarandeado." }
]
},

{
nombre:"Aguachiles",
productos:[
{ id:"aguachile1", nombre:"Aguachile rojo", precio:180, descripcion:"Camarones en salsa roja picante con limón." },
{ id:"aguachile2", nombre:"Aguachile verde", precio:180, descripcion:"Camarones en salsa verde con chile serrano." },
{ id:"aguachile3", nombre:"Aguachile perla negra", precio:190, descripcion:"Aguachile especial de la casa." },
{ id:"aguachile4", nombre:"Aguachile de atún", precio:190, descripcion:"Aguachile preparado con atún fresco." }
]
},

{
nombre:"Cortes",
productos:[
{ id:"corte1", nombre:"New York", precio:330, descripcion:"Corte New York de res de aproximadamente 400g." },
{ id:"corte2", nombre:"Ribeye", precio:339, descripcion:"Corte ribeye jugoso de res." },
{ id:"corte3", nombre:"Arrachera", precio:280, descripcion:"Arrachera a la parrilla." },
{ id:"corte4", nombre:"T-Bone", precio:339, descripcion:"Corte T-Bone de res." },
{ id:"corte5", nombre:"Cowboy", precio:480, descripcion:"Corte cowboy grueso de res." },
{ id:"corte6", nombre:"Tomahawk", precio:1100, descripcion:"Corte tomahawk premium preparado al carbón." }
]
},

{
nombre:"Postres",
productos:[
{ id:"postre1", nombre:"Rebanada de pastel", precio:60, descripcion:"Rebanada de pastel casero." },
{ id:"postre2", nombre:"Plátanos con lechera", precio:55, descripcion:"Plátanos asados con lechera." },
{ id:"postre3", nombre:"Helado", precio:60, descripcion:"Helado cremoso de sabor variado." },
{ id:"postre4", nombre:"Cheesecake", precio:60, descripcion:"Pastel de queso estilo cheesecake." }
]
},

{
nombre:"Bebidas",
productos:[
{ id:"bebida1", nombre:"Jugo natural", precio:45, descripcion:"Jugo natural de frutas." },
{ id:"bebida2", nombre:"Licuado", precio:55, descripcion:"Licuado de frutas con leche." },
{ id:"bebida3", nombre:"Limonada", precio:60, descripcion:"Bebida refrescante de limón." },
{ id:"bebida4", nombre:"Naranjada", precio:60, descripcion:"Bebida refrescante de naranja." },
{ id:"bebida5", nombre:"Agua fresca", precio:29, descripcion:"Agua fresca natural del día." },
{ id:"bebida6", nombre:"Refresco", precio:30, descripcion:"Refresco embotellado." },
{ id:"bebida7", nombre:"Cerveza", precio:40, descripcion:"Cerveza fría." },
{ id:"bebida8", nombre:"Capuccino", precio:50, descripcion:"Café capuccino caliente." },
{ id:"bebida9", nombre:"Frapuccino", precio:65, descripcion:"Bebida fría de café tipo frappé." },
{ id:"bebida10", nombre:"Café americano", precio:30, descripcion:"Café americano tradicional." }
]
}

]