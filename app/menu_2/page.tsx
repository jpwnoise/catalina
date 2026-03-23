"use client"

import { useState, useRef, useEffect } from "react"
import { menu } from "@/data/menu"
import { motion, AnimatePresence } from "framer-motion"

export default function Menu() {

  const [categoria, setCategoria] = useState(menu[0].nombre)
  const [busqueda, setBusqueda] = useState("")
  const tabsRef = useRef<HTMLDivElement>(null)

  const categoriaActiva = menu.find(c => c.nombre === categoria)

  const productos =
    categoriaActiva?.productos.filter(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    ) || []

  useEffect(() => {
    const active = document.getElementById(`tab-${categoria}`)
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    })
  }, [categoria])

  const scrollLeft = () => {
    tabsRef.current?.scrollBy({
      left: -200,
      behavior: "smooth"
    })
  }

  const scrollRight = () => {
    tabsRef.current?.scrollBy({
      left: 200,
      behavior: "smooth"
    })
  }

  return (

    <div className="max-w-6xl mx-auto pb-10">

      {/* HERO */}

      <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden">

        <img
          src="/image_menu.png"
          alt="Hero menú"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">

          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            La Catalina
          </h1>

          <p className="mt-2 text-lg opacity-90">
            Menú Digital
          </p>

        </div>

      </div>


      {/* BLOQUE BUSCADOR + CATEGORÍAS */}

      <div className="top-0 z-30 px-4 pt-4">

        <div className="bg-[#ffeeee] rounded-2xl shadow-md p-4 space-y-4">

          {/* BUSCADOR */}

          <input
            type="text"
            placeholder="Buscar platillo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full border-4 border-red-300 placeholder-[rgb(100,50,50)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500"
          />

          {/* CATEGORÍAS */}

          <div className="relative flex items-center">

            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 h-full px-2 text-gray-500 hover:text-black"
            >
              ◀
            </button>

            <div
              ref={tabsRef}
              className="flex overflow-x-hidden gap-3 px-8 w-full"
            >

              {menu.map(cat => (

                <button
                  id={`tab-${cat.nombre}`}
                  key={cat.nombre}
                  onClick={() => {
                    setCategoria(cat.nombre)
                    setBusqueda("")
                  }}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition
                  ${categoria === cat.nombre
                      ? "bg-[#d9546e] text-gray-100 shadow"
                      : "bg-[rgb(200,150,150)] text-[rgb(100,0,0)]"
                    }`}
                >
                  {cat.nombre}
                </button>

              ))}

            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 z-10 h-full px-2 text-gray-500 hover:text-black"
            >
              ▶
            </button>

          </div>

        </div>

      </div>


      {/* TÍTULO DE CATEGORÍA */}

      <h2 className="text-2xl font-bold px-4 mt-6 mb-4">
        {categoria}
      </h2>


      {/* PRODUCTOS */}

      <div className="px-4 ">

        <AnimatePresence mode="wait">

          <motion.div
            key={categoria}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4"
          >

            {productos.map(producto => (

              <div
                key={producto.id}
                className="bg-[#ffeeee] rounded-2xl shadow hover:shadow-md transition p-4 flex gap-4 items-center"
              >

                {/* TEXTO */}

                <div className="flex-">

                  <h3 className="font-semibold text-lg">
                    {producto.nombre}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {producto.descripcion}
                  </p>

                  <div className="flex justify-between items-center mt-3">

                    <button className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-lg hover:bg-yellow-400">
                      Ordenar
                    </button>

                  </div>

                </div>

                {/* IMAGEN */}

                <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">

                  {producto.imagen ? (

                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                      Imagen
                    </div>

                  )}

                </div>

              </div>

            ))}

          </motion.div>

        </AnimatePresence>


        {productos.length === 0 && (

          <div className="text-center py-16 text-gray-400">
            No se encontraron productos
          </div>

        )}

      </div>

    </div>

  )
}