"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"

export default function QuejasSugerenciasPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("Función no implementada")
  }

  return (
    <main className="min-h-screen bg-white py-10 text-gray-800">
      <section className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Quejas y sugerencias</h1>
        <p className="text-gray-600 mb-6">Tu opinión nos ayuda a mejorar. Completa el formulario y presiona Enviar.</p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="text-sm font-semibold text-gray-700">Nombre
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[rgb(236,46,93)] focus:outline-none"
              required
            />
          </label>

          <label className="text-sm font-semibold text-gray-700">Correo electrónico
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[rgb(236,46,93)] focus:outline-none"
              required
            />
          </label>

          <label className="text-sm font-semibold text-gray-700">Mensaje
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="mt-1 w-full min-h-[120px] rounded-lg border border-gray-300 px-3 py-2 focus:border-[rgb(236,46,93)] focus:outline-none"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[rgb(236,46,93)] px-6 py-3 text-white font-bold transition hover:bg-pink-600"
          >
            Enviar
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center font-semibold text-gray-700">{status}</p>
        )}

        <div className="mt-6 text-center text-gray-500">
          <Link href="/" className="font-medium underline hover:text-gray-700">Volver al inicio</Link>
        </div>
      </section>
    </main>
  )
}
