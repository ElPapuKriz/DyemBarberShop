import { motion } from "framer-motion"
import { images } from "@/mock/data.mock"


const Catalogo = () => {
    return (
        <section className="min-h-screen bg-[#0B0B0B] text-white px-6 py-20">

            {/* TITULO */}
            <div className="mb-16 text-center">
                <h2 className="text-2xl md:text-6xl font-title tracking-wide">
                    Galería de Estilo
                </h2>
                <p className="text-gray-400 mt-4 font-main">
                    Cada corte es una expresión
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {images.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden group rounded-2xl"
                    >

                        {/* IMAGEN */}
                        <img
                            src={item.src}
                            className="w-full h-50 md:h-100 object-cover transition duration-500 group-hover:scale-110"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

                        {/* TEXTO */}
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-xl font-main tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-sm font-main text-gray-300">
                                {item.category}
                            </p>
                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default Catalogo