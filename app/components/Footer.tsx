import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-6 px-4 flex flex-col items-center gap-4">

      {/* ICONOS */}
      <div className="flex gap-6 text-2xl">
        <a
          href="#"
          className="bg-gray-700 p-3 rounded-full hover:scale-110 hover:bg-blue-600 transition duration-300"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          className="bg-gray-700 p-3 rounded-full hover:scale-110 hover:bg-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      {/* DIRECCIÓN */}
      <p className="text-sm text-center max-w-md leading-relaxed">
        Zalatitan 652, Linda Vista 45520  
        <br />
        San Pedro Tlaquepaque, Jal.
      </p>

    </footer>
  );
}