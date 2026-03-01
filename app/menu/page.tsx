"use client";

import { motion } from "framer-motion";

const menuData = [
  {
    category: "Entradas",
    items: [
      { name: "Coctel de Camarón", price: "$180", desc: "Camarón fresco con salsa especial de la casa." },
      { name: "Aguachile Verde", price: "$220", desc: "Camarones crudos marinados en limón, chile y pepino." },
      { name: "Ostiones en su Concha", price: "$190", desc: "Servidos frescos con limón y salsa negra." },
    ],
  },
  {
    category: "Tostadas",
    items: [
      { name: "Tostada de Ceviche Mixto", price: "$95", desc: "Camarón, pulpo y pescado fresco." },
      { name: "Tostada de Atún Sellado", price: "$120", desc: "Atún premium con aguacate y ajonjolí." },
    ],
  },
  {
    category: "Especialidades",
    items: [
      { name: "Filete a la Plancha", price: "$240", desc: "Filete fresco con mantequilla de ajo." },
      { name: "Pulpo Zarandeado", price: "$320", desc: "Pulpo marinado a la parrilla estilo Nayarit." },
      { name: "Mariscada Especial", price: "$520", desc: "Langosta, camarón, pulpo y pescado." },
    ],
  },
  {
    category: "Bebidas",
    items: [
      { name: "Clamato Preparado", price: "$95", desc: "Con limón, salsas negras y camarón." },
      { name: "Cerveza Artesanal", price: "$75", desc: "Selección local bien fría." },
      { name: "Agua Mineral", price: "$45", desc: "Con limón natural." },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO DEL MENÚ */}
      <section className="py-20 text-center bg-neutral-900">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Nuestro Menú
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-neutral-400"
        >
          Sabores frescos del mar directo a tu mesa 🌊
        </motion.p>
      </section>

      {/* LISTA DEL MENÚ */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-16">

        {menuData.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b border-neutral-800 pb-3">
              {section.category}
            </h2>

            <div className="space-y-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-start bg-neutral-900 p-6 rounded-xl"
                >
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>

                  <span className="text-orange-500 font-bold text-lg">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-neutral-500">
        © 2026 Mariscos del Pacífico · Todos los derechos reservados
      </footer>
    </main>
  );
}