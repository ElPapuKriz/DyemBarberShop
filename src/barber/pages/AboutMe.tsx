import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const images = [
    "me/me1.jpeg",
    "me/me2.jpeg",
    "me/me3.jpeg",
    "me/me4.jpeg",
]

const videos = [
    "me/video1.webm",
    "me/video2.webm",
    "me/video3.webm",
    "me/video4.webm",
]

const AboutMe = () => {

    const [indexImg, setIndexImg] = useState(0)
    const [indexVideo, setIndexVideo] = useState(0)
    const [aboutme, setAboutMe] = useState('hidden')

    useEffect(() => {
        const intervalImg = setInterval(() => {
            setIndexImg((prev) => (prev + 1 === images.length ? 0 : prev + 1))
        }, 3000)

        return () => clearInterval(intervalImg)
    }, [images.length])

    const nextVideo = () => {
        setIndexVideo((prev) =>
            prev === videos.length - 1 ? 0 : prev + 1
        )
    }

    const prevVideo = () => {
        setIndexVideo((prev) =>
            prev === 0 ? videos.length - 1 : prev - 1
        )
    }

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
                                opacity: i === indexImg ? 1 : 0,
                                scale: i === indexImg ? 1 : 1.05
                            }}
                            transition={{ duration: 0.8 }}
                        />
                    ))}
                    <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-title text-3xl md:text-5xl p-3 z-10 text-white/60">Dario Jeyson</h3>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent" />


                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center gap-4 ">


                    <span className={`${aboutme} text-gray-300 leading-relaxed font-main text-md lg:text-2xl `}>
                        Cuando te cortas el cabello conmigo, no solo estás recibiendo un servicio… estás viviendo una experiencia.

                        No soy solo un barbero. Soy un artista. Como un Van Gogh, un Da Vinci o un Miguel Ángel, cada corte es una obra única, pensada y creada especialmente para ti.

                        Aquí no vienes solo a cortarte el cabello, vienes a sentirte como una obra de arte.

                        Mi objetivo no es ser recordado únicamente como alguien que cortaba cabello, sino como un artista que transformaba estilos, elevaba confianza y dejaba huella en cada persona.

                        Así que cuando visites esta barbería, siéntete afortunado… porque no solo estás frente a un barbero, estás frente a un artista.
                    </span>

                    <motion.div
                        className="flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:scale-105 transition animate-bounce cursor-pointer font-main"
                            onClick={() => setAboutMe(aboutme === "hidden" ? "" : "hidden")}
                        >
                            {aboutme === "hidden" ? "Ver más" : "Ver menos"}
                        </button>
                    </motion.div>
                </div>

            </div>

            {/* Videos */}

            <div className="mt-12 flex flex-col items-center gap-4">

                <div className="relative w-100 md:w-120">

                    <AnimatePresence mode="wait">
                        <motion.video
                            key={videos[indexVideo]}
                            src={videos[indexVideo]}
                            className="w-full rounded-2xl shadow-lg"
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                        />
                    </AnimatePresence>

                    {/* button left */}
                    <button
                        onClick={prevVideo}

                        className=" cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full"
                    >
                        <img
                            src="tijera.png"
                            className="w-5 rotate-180 invert brightness-0"
                            alt="<-" />
                    </button>

                    {/* button right */}
                    <button
                        onClick={nextVideo}
                        className="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full"
                    >
                        <img
                            src="tijera.png"
                            className="w-5 invert brightness-0"
                            alt="->" />
                    </button>

                </div>
            </div>



        </section>
    )
}

export default AboutMe
