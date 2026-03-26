"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Lora } from "next/font/google";
import CatalinaHeader from "./components/Header";
import Footer from "./components/Footer";
import Buzon from "./components/Buzon";
import VideosSection from "./components/VideosSecton";

const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"]
});

export default function HomePage() {
  const [flyerOpen, setFlyerOpen] = useState(false);

  return (
    <div className="relative">
      <CatalinaHeader />

      {/* Flyer sticky lateral desktop */}
      <button title="Volante Marzo 2026"
        onClick={() => setFlyerOpen(true)}
        className="hidden md:flex items-center justify-center fixed left-4 top-1/3 z-50 h-20 w-20 overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-lg transition hover:scale-105"
        aria-label="Abrir flyer"
      >
        <Image
          src="/flayer.jpg"
          alt="Flyer"
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
      </button>

      {/* Flyer botón móvil */}
      <button
        onClick={() => setFlyerOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-50 h-16 w-16 overflow-hidden rounded-full border border-gray-200 bg-white p-1 shadow-lg transition hover:scale-105"
        aria-label="Abrir flyer"
      >
        <Image
          src="/flayer.jpg"
          alt="Flyer"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
      </button>

      {/* MODAL FLYER (FIXED) */}
      {flyerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

          {/* Botón cerrar */}
          <button
            onClick={() => setFlyerOpen(false)}
            className="absolute top-4 right-4 z-[60] rounded-full bg-white p-2 text-gray-800 shadow hover:bg-gray-100"
            aria-label="Cerrar flyer"
          >
            ✕
          </button>

          {/* Contenedor con scroll */}
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto">
            <Image
              src="/flayer.jpg"
              alt="Flyer completo"
              width={1000}
              height={1600} // ajusta si quieres más precisión
              className="w-full h-auto rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      )}

      <main className="min-h-screen bg-white text-gray-600">

        {/* HERO */}
        <section className={`${lora.className} flex flex-col items-center p-4 italic font-bold text-gray-600 shadow-xl`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Image
              src="/logo_rosa.png"
              alt="La catalina"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2>Food & Drink</h2>
            <p className="text-lg mb-10 max-w-xl mx-auto">
              Mariscos frescos, ambiente elegante y una experiencia
              que despierta todos tus sentidos.
            </p>
            <div className="flex justify-center mt-10 gap-4 flex-wrap">
              <Link
                href="/menu"
                className="bg-[rgb(236,46,93)] text-white px-16 py-10 rounded-lg shadow-2xl border-4 border-[rgb(236,46,93)] font-bold tracking-widest text-2xl hover:scale-105 transition"
              >
                MENÚ
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ESENCIA */}
        <section className={`${lora.className} py-20 px-6 text-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md mx-4 my-8 italic font-bold text-gray-600`}>
          <h2 className="text-4xl mb-6">Nuestra Esencia</h2>
          <p className="max-w-3xl mx-auto">
            En La Catalina celebramos el sabor del mar con una propuesta
            gastronómica fresca, sofisticada y llena de personalidad.
            Cada platillo está diseñado para crear momentos memorables.
          </p>
        </section>

        <VideosSection />

        {/* DESTACADOS */}
        <section className={`${lora.className} py-20 px-6 bg-[rgb(234, 200, 209)] text-gray-600 italic font-bold`}>
          <h2 className="text-4xl text-center mb-12">Especialidades</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Aguachile Verde", image: "/aguachile-verde.jpg" },
              { name: "Torre de mariscos", image: "/torre.jpg" },
              { name: "Brisket", image: "/brisket.jpg" },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative p-8 rounded-2xl shadow-md overflow-hidden bg-white/80 backdrop-blur-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover absolute inset-0 rounded-2xl"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,rgba(236,46,93,0.6)_60%,rgba(17,17,17,0.8)_100%)] rounded-2xl"></div>
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
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
          className={`${lora.className} relative py-20 px-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md mx-4 my-8 italic font-bold text-gray-600 overflow-hidden`}
        >
          <Image
            src="/mesero.jpg"
            alt="Mesero"
            fill
            className="object-cover absolute inset-0"
            style={{ objectPosition: '20% 20%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Visítanos</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-lg text-center md:text-left">
                <p>
                  📍 Calle Zalatitán 652, Colonia Linda Vista <br />
                  San Pedro Tlaquepaque
                </p>
                <p>📞 3343637881 Reservaciones</p>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:3343637881"
                  className="mt-6 inline-block bg-[rgb(236,46,93)] text-white px-10 py-4 rounded-full font-semibold"
                >
                  Llamar Ahora
                </motion.a>
              </div>
              <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.123456789!2d-103.297683!3d20.6412442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b36fadec7503%3A0xfa6509b81adacfc8!2sLA%20CATALINA%20food%20and%20drink%20Tlaquepaque!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="flex justify-center mb-6">
        <Buzon />
      </div>
      <Footer />
    </div>
  );
}