import { getCart } from "@/lib/Cart"

export function buildWhatsAppMessage():string {
  const cart = getCart()

  if (cart.length === 0) return ""

  let message = "Hola, quiero hacer el siguiente pedido:%0A%0A"

  cart.forEach((item: any) => {
    message += `• ${item.name} x${item.quantity}%0A`
  })

  message += "%0AGracias!"

  return message
}

export function sendToWhatsApp(){
  const message = buildWhatsAppMessage()

  if (!message) return

  const phone = "+5213343637881" 

  const url = `https://wa.me/${phone}?text=${message}`

  window.open(url, "_blank")
}