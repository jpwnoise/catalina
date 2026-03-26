'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CatalinaHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgb(255,214,214)] shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_rosa.png"
            alt="La Catalina"
            width={70}
            height={70}
            priority
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-wide text-gray-700">La Catalina</span>
        </Link>

        <div className="flex items-center gap-3">
          <p className="hidden md:block text-sm font-semibold text-gray-700"> Tel: <a href="tel:3343637881" className="text-[rgb(236,46,93)]">334 363 7881</a></p>
          <Link
            href="/reservar"
            className="rounded-full border-2 border-gray-500 bg-[rgba(236,46,93,0] px-4 py-2 text-sm font-bold text-gray-600 shadow transition hover:bg-pink-200"
          >
            Reservar
          </Link>
        </div>
      </div>
    </header>
  )
}