import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const BtnWsp = () => {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true)
            setTimeout(() => setAnimate(false), 1000)
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    const phone = "51970903225" 
    const message = "Hola bro, quiero un corte. ¿Cuándo tienes un espacio?"

    return (
        <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50"
        >
            <motion.div
                animate={
                    animate
                        ? {
                            rotate: [0, -10, 10, -10, 10, 0],
                            scale: [1, 1.1, 1],
                        }
                        : {}
                }
                transition={{ duration: 0.6 }}
                className="bg-[#0B0B0B]/50 hover:bg-green-600 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg"
            >
                {/* Icono WhatsApp */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-white"
                >
                    <path d="M20.52 3.48A11.8 11.8 0 0012.03 0C5.39 0 .03 5.36.03 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.62A11.96 11.96 0 0012.03 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.2-3.51-8.52zM12.03 21.8c-1.8 0-3.57-.48-5.12-1.38l-.36-.21-3.68.96.98-3.59-.23-.37A9.8 9.8 0 012.23 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.73 9.73 0 0121.83 12c0 5.4-4.4 9.8-9.8 9.8zm5.37-7.37c-.29-.15-1.7-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.96-.16-.29-.02-.45.13-.6.14-.14.29-.33.44-.49.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.02c.15.19 2.03 3.1 4.92 4.34.69.3 1.22.48 1.63.61.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.34z" />
                </svg>
            </motion.div>
        </a>
    )
}

export default BtnWsp