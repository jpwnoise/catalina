"use client"

import { motion } from "framer-motion"
import { addToCart, CartItem } from "@/lib/Cart"
import { FiPlus } from "react-icons/fi"

export default function BotonAgregar(producto: CartItem) {
  return (
    <motion.button
      onClick={() => addToCart(producto)}

      whileTap={{ scale: 0.8 }}          // 👈 animación click
      whileHover={{ scale: 1.1 }}        // 👈 hover suave (desktop)

      className="
        bg-gray-700 text-white
        w-9 h-9 rounded-full flex items-center justify-center shadow-lg
        transition-all duration-200
        
        opacity-100
        md:opacity-30 md:group-hover:opacity-100
      "
    >
      <FiPlus />
    </motion.button>
  )
}