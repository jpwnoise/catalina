'use client'

import { useState, FormEvent } from 'react'

export default function Reservar() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [people, setPeople] = useState(2)
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!date || !time || people < 1) {
      setMessage('Por favor completa todos los campos antes de reservar.')
      return
    }
    setMessage(`Reserva solicitada para ${date} a las ${time}, para ${people} persona${people > 1 ? 's' : ''}.`) 
  }

  return (
    <section id="reservar" className="max-w-6xl mx-auto mt-8 rounded-2xl border border-pink-200 bg-white/90 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[rgb(236,46,93)] text-center">Reserva tu mesa</h2>
      <p className="mt-2 text-center text-gray-700">Descansamos los miércoles.</p>
      <p className="text-center text-gray-700">Tel: <a href="tel:3343637881" className="font-semibold text-[rgb(236,46,93)]">334 363 7881</a></p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-gray-700 font-semibold">
          Día
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[rgb(236,46,93)] focus:outline-none"
          />
        </label>

        <label className="flex flex-col text-gray-700 font-semibold">
          Hora
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[rgb(236,46,93)] focus:outline-none"
          />
        </label>

        <label className="flex flex-col text-gray-700 font-semibold">
          Cantidad de personas
          <input
            type="number"
            min={1}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[rgb(236,46,93)] focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="h-fit rounded-full bg-[rgb(236,46,93)] px-6 py-2 text-white font-bold shadow-md transition hover:bg-pink-600"
        >
          Confirmar reserva
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}

      <div className="mt-6 text-center">
        <a
          href="https://wa.me/523343637881?text=Hola%20quiero%20hacer%20una%20reserva"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[rgb(236,46,93)] px-8 py-2 text-white font-bold shadow-md transition hover:bg-pink-600"
        >
          También por WhatsApp
        </a>
      </div>
    </section>
  )
}
