"use client"

import { useState, useEffect } from "react"
import { menu, Categoria } from "@/data/menu"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Lora } from "next/font/google"
import { motion } from "framer-motion"

const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"]
})

export default function Menu() {

  const [category, changeCategory] = useState<Categoria>(menu[0])
  const [categoryOffset, setCatOffset] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxOffset = Math.max(menu.length - itemsPerView, 0)

  // auto seleccionar en móvil
  useEffect(() => {
    if (itemsPerView === 1) {
      changeCategory(menu[categoryOffset])
    }
  }, [categoryOffset, itemsPerView])

  // swipe handler
  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50

    if (info.offset.x < -threshold) {
      // swipe izquierda (avanza)
      setCatOffset(prev => Math.min(prev + itemsPerView, maxOffset))
    }

    if (info.offset.x > threshold) {
      // swipe derecha (regresa)
      setCatOffset(prev => Math.max(prev - itemsPerView, 0))
    }
  }

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

      {/* CARRUSEL */}
      <div className="flex flex-col items-center shadow-xl">
        <div className="flex items-center m-4 w-full justify-center">

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
              setCatOffset(prev => Math.max(prev - itemsPerView, 0))
            }}
          >
            <ArrowLeft />
          </button>

          {/* Swipe container */}
          <motion.div
            className="flex overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {menu.slice(categoryOffset, categoryOffset + itemsPerView).map((cat, index) => {
              const isActive = category.nombre === cat.nombre

              return (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changeCategory(cat)}
                  className={`${lora.className}
                    m-2 md:m-4
                    italic font-bold
                    transition duration-300 ease-in-out
                    rounded-full border-2
                    flex items-center justify-center
                    
                    w-24 h-24 text-sm
                    md:w-32 md:h-32 md:text-lg
                    
                    ${isActive
                      ? "bg-blue-100 border-blue-500 text-blue-600 shadow-xl scale-105"
                      : "border-gray-400 text-gray-700 shadow-lg hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-2xl"
                    }
                  `}
                >
                  <p className="text-center leading-tight pointer-events-none scale-100 md:scale-125">
                    {cat.nombre.replace(" y ", " y\u00A0")}
                  </p>
                </motion.button>
              )
            })}
          </motion.div>

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
              setCatOffset(prev => Math.min(prev + itemsPerView, maxOffset))
            }}
          >
            <ArrowRight />
          </button>

        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="m-4 bg-gray-200 shadow-lg flex flex-col">

        <div className="grid grid-cols-1 md:grid-cols-2 w-full shadow-lg">

          <div className={`${lora.className} italic bg-gray-400 w-full text-center p-2 font-bold text-2xl text-gray-900 flex items-center justify-center`}>
            {category.nombre}
          </div>

          <div className="p-4 h-64 overflow-y-auto shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)]">
            <ul className={`${lora.className} italic list-disc pl-4 space-y-1 font-bold text-gray-900 text-xl`}>
              {category.productos.map((producto, index) => (
                <li key={index}>{producto.nombre}</li>
              ))}
            </ul>
          </div>

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