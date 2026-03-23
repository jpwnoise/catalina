"use client"

import { useState } from "react"
import { menu, Categoria } from "@/data/menu"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Lora } from "next/font/google"

const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"]
})

export default function Menu() {

  // categoría seleccionada
  const [category, changeCategory] = useState<Categoria>(menu[0])

  // offset del carrusel (empieza en 0)
  const [categoryOffset, setCatOffset] = useState(0)

  const maxOffset = Math.max(menu.length - 3, 0)

  return (
    <div>

      {/* HERO */}
      <div className="w-full">
        <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/image_menu.png"
            alt="Hero menu"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* CARRUSEL DE CATEGORÍAS */}
      <div className="flex flex-col items-center shadow-xl">
        <div className="flex items-center m-4">

          {/* Flecha izquierda */}
          <button
            disabled={categoryOffset === 0}
            className={`p-2 border rounded-full transition
              ${categoryOffset === 0
                ? "text-gray-300 border-gray-300 cursor-not-allowed"
                : "hover:border-blue-500 hover:text-blue-500"
              }
            `}
            onClick={() => {
              setCatOffset(prev => Math.max(prev - 3, 0))
            }}
          >
            <ArrowLeft />
          </button>

          {/* Categorías */}
          {menu.slice(categoryOffset, categoryOffset + 3).map((cat, index) => {
  const isActive = category.nombre === cat.nombre

  return (
    <button
      key={index}
      onClick={() => changeCategory(cat)}
      className={`${lora.className} m-4 italic transition duration-300 ease-in-out font-bold p-2 rounded-full border-2 text-lg w-32 h-32
        ${isActive
          ? "bg-blue-100 border-blue-500 text-blue-600 shadow-xl scale-105"
          : "border-gray-400 text-gray-700 shadow-lg hover:-translate-y-4 hover:shadow-2xl"
        }
      `}
    >
      <p className="scale-125 text-center leading-tight pointer-events-none">
        {cat.nombre.replace(" y ", " y\u00A0")}
      </p>
    </button>
  )
})}

          {/* Flecha derecha */}
          <button
            disabled={categoryOffset >= maxOffset}
            className={`p-2 border rounded-full transition
              ${categoryOffset >= maxOffset
                ? "text-gray-300 border-gray-300 cursor-not-allowed"
                : "hover:border-blue-500 hover:text-blue-500"
              }
            `}
            onClick={() => {
              setCatOffset(prev => Math.min(prev + 3, maxOffset))
            }}
          >
            <ArrowRight />
          </button>

        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="m-4 bg-gray-200 shadow-lg flex flex-col">

        <div className="grid grid-cols-1 md:grid-cols-2 w-full shadow-lg">

          {/* Nombre categoría */}
          <div className={`${lora.className} italic bg-gray-400 w-full text-center p-2 font-bold text-2xl rounded-t text-gray-900 flex items-center justify-center`}>
            {category.nombre}
          </div>

          {/* Lista productos */}
          <div className="p-4 h-64 overflow-y-auto shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)]">
            <ul className={`${lora.className} italic list-disc pl-4 space-y-1 font-bold text-gray-900 text-xl`}>
              {category.productos.map((producto, index) => (
                <li key={index}>{producto.nombre}</li>
              ))}
            </ul>
          </div>

          {/* Imagen */}
          <div className="flex justify-center items-center p-4">
            <Image
              src={'/menu/tostada_camaron.png'}
              width={200}
              height={200}
              alt="imagen producto"
            />
          </div>

        </div>
      </div>

    </div>
  )
}