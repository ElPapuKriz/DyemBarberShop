import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"
import { ScissorsIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router"


const CustomHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [Icon, setIcon] = useState("")

    const handleMenuOpen = () => { setMenuOpen(!menuOpen) }

    return (
        <header>
            <div className="w-full flex justify-between z-50 fixed bg-linear-to-r from-[#251e19] to-[#AB6626]/10 backdrop-blur-md p-5 items-center">

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <img
                            src={logo}
                            alt="logo-Dyem-BarberShop"
                            width={150}
                        />
                    </motion.div>
                </div>

                <Button
                    onClick={handleMenuOpen}
                    className="md:hidden"
                >
                    <ScissorsIcon className="text-[#978957] size-5"/>
                </Button>

                <div className="hidden md:flex items-end gap-3 font-main">
                    <Button
                        onClick={() => alert("Aqui veras tu inicio")}
                    >
                        Inicio
                    </Button>

                    <Button
                        onClick={() => alert("Aqui veras tu catálogo")}
                    >
                        Catálogo
                    </Button>

                    <Button
                        onClick={() => alert("Aqui veras acerca de mí")}
                    >
                        Acerca de mí
                    </Button>
                </div>
            </div>

            {/* Modal */}
            <motion.div
                initial    ={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition ={{ delay: 0.1 }}
                className  ={`${menuOpen ? 'md:hidden' : 'hidden'} fixed z-50 bg-[#251e19]/80 w-50 h-50 rounded-md top-30 right-5`}
            >
                <div
                    className="flex flex-col gap-2 p-2 my-2 mx-2 bg-amber-100/40 rounded-md "
                >
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            className="text-main text-white"
                            onMouseEnter={() => {setIcon("inicio")}}
                            onMouseLeave={() => {setIcon("")}}
                            onClick={()=><Link to={'#inicio'}/>}
                        >
                            {Icon==="inicio" && <ScissorsIcon className="text-yellow-700"/> } Inicio
                        </Button>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button
                            className="text-main text-white"
                            onMouseEnter={() => {setIcon("catalogo")}}
                            onMouseLeave={() => {setIcon("")}}
                        >
                            {Icon==="catalogo" && <ScissorsIcon className="text-yellow-700"/> } Catálogo
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            className="text-main text-white"
                            onMouseEnter={() => {setIcon("acerca")}}
                            onMouseLeave={() => {setIcon("")}}
                        >
                        {Icon==="acerca" && <ScissorsIcon className="text-yellow-700"/> } Acerca de mí
                        </Button>
                    </motion.div>

                </div>

            </motion.div>

        </header>
    )
}

export default CustomHeader
