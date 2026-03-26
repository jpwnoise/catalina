'use client'
import { Lora } from "next/font/google";

const lora = Lora({
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["400", "500", "600", "700"]
});

export default function VideosSection() {
    return (
        <section className={`${lora.className} py-20 px-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md mx-4 my-8 italic font-bold text-gray-600`}>

            <h2 className="text-4xl text-center mb-6">
                Música en Vivo los Domingos y Momentos del Restaurante
            </h2>

            <p className="text-center mb-12 max-w-3xl mx-auto">
                Disfruta de nuestras presentaciones musicales los domingos y echa un vistazo a la atmósfera vibrante de La Catalina a través de nuestros videos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* VIDEO 1 */}
                <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <iframe
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F695900600212003&show_text=false"
                        className="w-full h-full"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* VIDEO 2 */}
                <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <iframe
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1069734678638443&show_text=false"
                        className="w-full h-full"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* VIDEO 3 */}
                <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <iframe
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F594050937049902&show_text=false"
                        className="w-full h-full"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </section>)
}