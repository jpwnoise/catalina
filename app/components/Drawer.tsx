"use client"
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { getCart, addToCart, clearCart } from "@/lib/Cart"
import { sendToWhatsApp } from "@/lib/buildWhatsppMessage";

interface CartItem {
  name: string
  price: number
  quantity: number
}

export default function CartDrawer({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [cart, setCart] = useState<CartItem[]>([])

  const loadCart = () => {
    setCart(getCart())
  }

  useEffect(() => {
    loadCart()

    // escuchar cambios globales
    window.addEventListener("cartUpdated", loadCart)

    return () => {
      window.removeEventListener("cartUpdated", loadCart)
    }
  }, [])

  // ➖ restar producto
  const removeOne = (item: CartItem) => {
    const updated = cart
      .map((p) =>
        p.name === item.name
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
      .filter((p) => p.quantity > 0)

    localStorage.setItem("cart", JSON.stringify(updated))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  // ➕ sumar producto
  const addOne = (item: CartItem) => {
    addToCart({ ...item, quantity: 1 })
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white z-[9999] shadow-2xl p-4 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Tu pedido</h2>
              <button onClick={onClose}>
                <X />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto space-y-3">
              {cart.length === 0 && (
                <p className="text-gray-500 text-sm text-center mt-10">
                  Carrito vacío
                </p>
              )}

              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center border rounded-lg p-2"
                >
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      x{item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeOne(item)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <button
                      onClick={() => addOne(item)}
                      className="px-2 bg-gray-800 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="border-t pt-3 mt-3">
              <p className="font-bold text-lg">
                Total: ${total}
              </p>

              <button
                onClick={clearCart}
                className="mt-2 w-full bg-gray-200 py-2 rounded"
              >
                Vaciar
              </button>

              <button className="mt-2 w-full bg-gray-800 text-white py-2 rounded" 
              onClick={()=>{
                console.log('enviando pedido')
                sendToWhatsApp()}}>
                Enviar pedido
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}