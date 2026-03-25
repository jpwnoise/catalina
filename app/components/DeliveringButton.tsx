"use client"

import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { motion } from "framer-motion"
import { getCartCount } from "@/lib/Cart"

interface Props {
  onClick: () => void
}

export default function CartButton({ onClick }: Props) {
  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false)

  const updateCart = () => {
    setCount(getCartCount())

    // 🔥 dispara animación
    setAnimate(true)
    setTimeout(() => setAnimate(false), 300)
  }

  useEffect(() => {
    updateCart()

    window.addEventListener("cartUpdated", updateCart)
    return () => window.removeEventListener("cartUpdated", updateCart)
  }, [])

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={animate ? { scale: [1, 1.3, 1] } : {}} // 👈 animación “pop”
      transition={{ duration: 0.3 }}
      className="fixed bottom-20 right-5 z-[9999] bg-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
    >
      <div className="relative">
        <FaShoppingCart />

        {/* BADGE */}
        {count > 0 && (
          <motion.span
            key={count} // 👈 re-render para animar número
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
          >
            {count}
          </motion.span>
        )}
      </div>
    </motion.button>
  )
}