const CustomHeader = () => {
    return (
        <header>
            <div className="w-full flex fixed bg-taupe-800/90 backdrop-blur-md p-5 items-center">
                <div className="">
                    <img 
                    src="/src/assets/logo.png"
                    alt="logo-Dyem-BarberShop"
                    width={150}
                    />

                </div>

                <div>
                    Botones Navegacion
                </div>
            </div>
        </header>
    )
}

export default CustomHeader
