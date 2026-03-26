import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"
import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const CustomHeader = () => {
    const [menuOpen , setMenuOpen] = useState(false)

    const handleMenuOpen = ()=>{setMenuOpen(!menuOpen)}

    return (
        <header>
            <div className="w-full flex justify-between z-50 fixed bg-linear-to-r from-[#251e19] to-[#AB6626]/10 backdrop-blur-md p-5 items-center">
                
                <div>
                    <motion.div
                    initial={{opacity:0,y:50}}
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
                ><MenuIcon className="text-[#978957]"/>
                </Button>

                <div className="hidden md:flex items-end gap-3 font-main">
                    <Button
                    onClick={()=>alert("Aqui veras tu inicio")}
                    >
                    Inicio
                    </Button>

                    <Button
                    onClick={()=>alert("Aqui veras tu catálogo")}
                    >
                    Catálogo
                    </Button>

                    <Button
                    onClick={()=>alert("Aqui veras acerca de mí")}
                    >
                    Acerca de mí
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default CustomHeader
