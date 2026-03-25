import { Button } from "@/components/ui/button"

const CustomHeader = () => {
    return (
        <header>
            <div className="w-full flex justify-between fixed bg-taupe-800/90 backdrop-blur-md p-5 items-center">
                <div className="">
                    <img 
                    src="/src/assets/logo.png"
                    alt="logo-Dyem-BarberShop"
                    width={150}
                    />

                </div>

                <div className="flex items-end">

                    <Button
                    onClick={()=>alert("Aqui veras tu inicio")}
                    >Inicio
                    </Button>

                    <Button
                    onClick={()=>alert("Aqui veras tu catálogo")}
                    >
                    Catálogo
                    </Button>

                    <Button
                    onClick={()=>alert("Aqui veras acerca de mí")}
                    >Acerca de mí
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default CustomHeader
