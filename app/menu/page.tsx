"use client"

import { useState, useEffect } from "react"
import { menu, Categoria } from "@/data/menu"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Lora } from "next/font/google"
import { AnimatePresence, motion } from "framer-motion"
import WhatsAppButton from "../components/whatsappbutton"
import DeliveringButton from "../components/DeliveringButton"
import Footer from "../components/Footer"
import CartDrawer from "../components/Drawer"
import { addToCart } from "@/lib/Cart"
import { FiPlus } from "react-icons/fi"
import BotonAgregar from "../components/BotonAgregar"
import CatalinaHeader from "../components/Header"


const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"]
})

export default function Menu() {

  const [category, changeCategory] = useState<Categoria>(menu[0])
  const [categoryOffset, setCatOffset] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [cartOpen, setCartOpen] = useState(false)

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxOffset = Math.max(menu.length - itemsPerView, 0)

  // Auto seleccionar en móvil
  useEffect(() => {
    if (itemsPerView === 1) {
      changeCategory(menu[categoryOffset])
    }
  }, [categoryOffset, itemsPerView])

  // Swipe handler
  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      setCatOffset(prev => Math.min(prev + itemsPerView, maxOffset))
    }
    if (info.offset.x > threshold) {
      setCatOffset(prev => Math.max(prev - itemsPerView, 0))
    }
  }

  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div>
      <CatalinaHeader/>
      {/* HERO */}
      <section className={`${lora.className} flex flex-col items-center p-4 italic font-bold text-gray-600`}>
        <Image
          src="/logo_rosa.png"
          alt="La catalina"
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full object-cover"
        />
        <h2>Food and Drink</h2>
        <h3>Menú</h3>
      </section>

      {/* CARRUSEL */}
      <div className="flex flex-col items-center shadow-xl">
        <div className="flex items-center m-4 w-full justify-center">

          {/* Flecha izquierda */}
          <button
            disabled={categoryOffset === 0}
            className={`p-2 border rounded-full transition
              ${categoryOffset === 0
                ? "text-gray-300 border-gray-300 cursor-not-allowed"
                : "hover:border-[rgb(236,46,93)] text-[rgb(236,46,93)] hover:scale-120 hover:border-2"
              }
            `}
            onClick={() => setCatOffset(prev => Math.max(prev - itemsPerView, 0))}
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
                      ? "border-[rgb(236,46,93)] text-[rgb(236,46,93)] shadow-xl scale-105 bg-[rgb(234, 200, 209)]"
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
                : "hover:border-[rgb(236,46,93)] text-[rgb(236,46,93)] hover:scale-120 hover:border-2"
              }
            `}
            onClick={() => setCatOffset(prev => Math.min(prev + itemsPerView, maxOffset))}
          >
            <ArrowRight />
          </button>

        </div>


      </div>

      {/* PRODUCTOS - 3 columnas en escritorio, vertical en móvil */}
      <div className="shadow flex flex-col">

        <AnimatePresence mode="wait">
          <motion.div
            key={category.nombre}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-4 "
          >

            {/*Lista de productos */}
            <AnimatePresence mode="wait">
              <div className="relative">

                {category.icon && (
                  <Image
                    src={category.icon}
                    alt="Icono de categoria"
                    fill
                    className="object-cover z-0 [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,.05))]"

                  />
                )}

                <motion.ul
                  key={category.nombre}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  className={`${lora.className} 
    relative z-10 
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
    gap-4 
    p-4 
    w-full max-w-5xl mx-auto`}
                >
                  {category.productos.map((producto, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="flex flex-col items-center justify-center gap-2 group bg-white/80 hover:border-[rgb(238,105,138)] backdrop-blur-md border border-gray-200 rounded-2xl p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
                    >
                      <p className="font-semibold text-gray-800 text-sm md:text-base">
                        {producto.nombre}
                      </p>

                      
                      <div className="w-6 h-[2px] bg-blue-500 mx-auto mt-2 rounded-full opacity-50"></div>
                      <BotonAgregar name={category.nombre + ' - ' + producto.nombre} price={producto.precio} quantity={1} />
                    </motion.li>
                  ))}

                  <motion.div
                    variants={item}
                    className="col-span-full flex justify-center items-center my-6"
                  >
                    {category.icon && (
                      <Image
                        src={category.icon}
                        alt="Icono decorativo"
                        width={300}
                        height={300}
                        className="w-24 md:w-40 lg:w-56 object-contain opacity-70"
                      />
                    )}
                  </motion.div>
                </motion.ul>
              </div>
            </AnimatePresence>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* BOTONES FLOTANTES FIX */}
      <div className="fixed inset-0 z-[9999] pointer-events-none">

        <div className="absolute bottom-5 right-5 pointer-events-auto">
          <WhatsAppButton />
        </div>

        <div className="absolute bottom-20 right-5 pointer-events-auto">
          <DeliveringButton onClick={() => setCartOpen(true)} />
        </div>

      </div>
      <Footer></Footer>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)}></CartDrawer>
    </div>
  )
}