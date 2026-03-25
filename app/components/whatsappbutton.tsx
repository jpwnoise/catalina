import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "521XXXXXXXXXX";
  const message = "Hola, quiero información";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
}