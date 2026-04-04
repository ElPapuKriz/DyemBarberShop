import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const images = [
        "me/me1.jpeg",
        "me/me2.jpeg",
        "me/me3.jpeg",
        "me/me4.jpeg",
    ]

const AboutMe = () => {
    
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])


    return (
        <section id="aboutMe" className="bg-[#0B0B0B] p-6 text-white scroll-mt-30">

            {/* Title */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-6xl font-title tracking-wide">
                    Acerca de mí
                </h2>
                <p className="text-gray-400 mt-4 font-main">
                    ¿Quién soy yo?
                </p>
            </div>

            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#111] rounded-3xl overflow-hidden shadow-xl">

                {/* Slider */}
                <div className="relative w-full h-200 overflow-hidden">

                    
                    {images.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            loading="lazy"
                            className="absolute w-full h-200 md:h-270 object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{
                                opacity: i === index ? 1 : 0,
                                scale: i === index ? 1 : 1.05
                            }}
                            transition={{ duration: 0.8 }}
                        />
                    ))}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                    
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center gap-4 ">

                    <h3 className="text-center font-title text-3xl p-3">Dario Jeyson</h3>
                    <p className="text-gray-300 leading-relaxed font-main text-md lg:text-2xl">
                        Cuando te cortas el cabello conmigo, no solo estás recibiendo un servicio… estás viviendo una experiencia.

                        No soy solo un barbero. Soy un artista. Como un Van Gogh, un Da Vinci o un Miguel Ángel, cada corte es una obra única, pensada y creada especialmente para ti.

                        Aquí no vienes solo a cortarte el cabello, vienes a sentirte como una obra de arte.

                        Mi objetivo no es ser recordado únicamente como alguien que cortaba cabello, sino como un artista que transformaba estilos, elevaba confianza y dejaba huella en cada persona.

                        Así que cuando visites esta barbería, siéntete afortunado… porque no solo estás frente a un barbero, estás frente a un artista.
                    </p>

                    <motion.div
                        className="flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <button className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:scale-105 transition animate-bounce">
                            Ver más
                        </button>
                    </motion.div>
                </div>

            </div>

            {/* Videos OPTIMIZADOS */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.video
                    src="me/video1.mp4"
                    whileHover={{ scale: 1.03 }}
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    preload="none"
                >
                    <source src="videos/video1.mp4" type="video/mp4" />
                </motion.video>

                <motion.video
                    src="me/video2.mp4"
                    whileHover={{ scale: 1.03 }}
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    preload="none"
                >
                    <source src="videos/video2.mp4" type="video/mp4" />
                </motion.video>
            </div>

        </section>
    )
}

export default AboutMe
