'use client'

import Link from 'next/link'
import { FiMail } from 'react-icons/fi'

export default function Buzon() {
  return (
    <Link
      href="/quejas-sugerencias"
      className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow hover:scale-105 hover:border-[rgb(236,46,93)] hover:text-[rgb(236,46,93)] transition"
    >
      <FiMail className="h-25 w-25" />
      Buzón de quejas y sugerencias
    </Link>
  )
}
