"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5D6D9] text-[#111111]">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Imagen de fondo */}
        <Image
          src="/restaurant-hero.png"
          alt="La Catalina Restaurante"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay elegante rosa */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,214,217,0.2)_0%,rgba(233,140,165,0.6)_60%,rgba(17,17,17,0.8)_100%)]"></div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1
            className="text-6xl font-bold tracking-wide mb-4 text-white drop-shadow-lg 
             transition-transform duration-300 ease-in-out hover:scale-110"
          >
            LA CATALINA
          </h1>


          <p className="uppercase tracking-[0.4em] text-sm mb-8 text-white/90 drop-shadow">
            Food and Drink
          </p>

          <p className="text-lg mb-10 max-w-xl mx-auto text-white text-shadow-dark">
            Mariscos frescos, ambiente elegante y una experiencia
            que despierta todos tus sentidos.
          </p>


          <div className="flex gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-[#111111] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Ver Menú
            </Link>

            <a
              href="#contacto"
              className="border-2 border-[#111111] px-8 py-3 rounded-full font-semibold hover:bg-[#111111] hover:text-white transition"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      </section>

      {/* ESENCIA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6 text-[#111111]">
          Nuestra Esencia
        </h2>

        <p className="max-w-3xl mx-auto text-neutral-600">
          En La Catalina celebramos el sabor del mar con una propuesta
          gastronómica fresca, sofisticada y llena de personalidad.
          Cada platillo está diseñado para crear momentos memorables.
        </p>
      </section>

      {/* DESTACADOS */}
      <section className="py-20 px-6 bg-[#E98CA5] text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Aguachile Verde", image: "/aguachile-verde.jpg" },
            { name: "Torre de mariscos", image: "/torre.jpg" },
            { name: "Brisket", image: "/brisket.jpg" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className="relative text-[#111111] p-8 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Imagen de fondo */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover absolute inset-0 rounded-2xl"
              />

              {/* Degradado circular encima de la imagen */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,214,217,0.2)_0%,rgba(233,140,165,0.6)_60%,rgba(17,17,17,0.8)_100%)] rounded-2xl"></div>

              {/* Contenido encima del degradado */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-semibold mb-3">
                  {item.name}
                </h3>
                <p className="text-sm">
                  Una combinación fresca y sofisticada que refleja
                  nuestra identidad culinaria.
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </section>

      {/* CONTACTO */}
      <section
  id="contacto"
  className="relative py-20 px-6 bg-[#F5D6D9] overflow-hidden"
>
  {/* Imagen del mesero a la izquierda */}
  <Image
    src="/mesero.jpg"
    alt="Mesero"
    fill
    className="object-cover absolute inset-0 object-pos-custom"
  />

  {/*haciendo cualquier cambio para prueba*/}
  {/* Degradado de derecha a izquierda */}
  <div className="absolute inset-0 bg-gradient-to-l from-[#F5D6D9] via-[#F5D6D9]/80 to-transparent"></div>

  {/* Contenido encima */}
  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-[#111111]">
      Visítanos
    </h2>

    {/* Grid 2 columnas */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Columna izquierda: dirección y botón */}
      <div className="space-y-4 text-lg text-[#111111] text-center md:text-left">
        <p>
          📍 Calle Zalatitán 652, Colonia Linda Vista <br />
          San Pedro Tlaquepaque
        </p>
        <p>📞 3343637881 Reservaciones</p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="tel:3343637881"
          className="mt-6 inline-block bg-[#111111] text-white px-10 py-4 rounded-full font-semibold"
        >
          Llamar Ahora
        </motion.a>
      </div>

      {/* Columna derecha: mapa embebido */}
      <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.123456789!2d-103.297683!3d20.6412442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b36fadec7503%3A0xfa6509b81adacfc8!2sLA%20CATALINA%20food%20and%20drink%20Tlaquepaque!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-[#111111] text-white py-10 text-center space-y-2">
        <p className="font-semibold">LA CATALINA · Food and Drink</p>
        <p className="text-sm">
          Calle Zalatitán 652, Colonia Linda Vista,
          San Pedro Tlaquepaque
        </p>
        <p className="text-sm">
          Tel: 3343637881 Reservaciones
        </p>
      </footer>
    </main>
  );
}
